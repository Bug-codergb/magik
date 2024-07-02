import { request } from "~/utils/request";
export default defineEventHandler(async event => {
  try {
    const query = getQuery(event);
    const cookie = getCookie(event, "authorization") ?? "";
    console.log(cookie);
    const res = await request({
      url: "http://localhost:8888/moment/list",
      params: query,
      isServer: true,
      headers: {
        Authorization: cookie
      }
    });

    return res;
  } catch (e) {
    return {
      code: 500,
      message: e.message
    };
  }
});
