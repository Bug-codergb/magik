import { type R } from "~/interface/R";
import { type IUser } from "~/interface/user";
export default defineEventHandler(async event => {
  const body = await readBody(event);
  console.log(body);
  const { userName, password } = body;
  const res = await $fetch<R<IUser>>("/server/login", {
    method: "post",
    body: {
      userName,
      password
    }
  });
  const date = new Date();
  setCookie(event, "authorization", res.data.token, {
    httpOnly: true,
    maxAge: date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
  });
  setCookie(event, "user-id", res.data.userId);
  setCookie(event, "user-name", res.data.userName);
  setCookie(event, "avatar-url", res.data.avatarUrl);
  return res;
});
