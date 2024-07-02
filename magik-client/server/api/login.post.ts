import { type R } from "~/interface/R";
import { type IUser } from "~/interface/user";
export default defineEventHandler(async event => {
  const body = await readBody(event);

  const { userName, password } = body;
  const res = await $fetch<R<IUser>>("http://localhost:8888/login", {
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
  setCookie(event, "user-id", res.data.userId, {
    maxAge: date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
  });
  setCookie(event, "user-name", res.data.userName, {
    maxAge: date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
  });
  setCookie(event, "avatar-url", res.data.avatarUrl, {
    maxAge: date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
  });
  return res;
});
