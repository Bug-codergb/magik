import { type R } from "~/interface/R";
import { navigateTo } from "#app";
export interface IConfig {
  url: string;
  method?: "get" | "post" | "delete" | "put";
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, any>;
  extraParams?: Record<string, any>;
  isServer?: boolean;
}
async function request<T = any>(config: IConfig): Promise<R<T>> {
  const {
    url,
    isServer = false,
    method = "post",
    params,
    body,
    headers = {
      "Content-Type": "application/json;charset=UTF-8"
    },
    extraParams = {}
  } = config;
  console.log("server", isServer);
  let paramsStr = "";
  if (params && Object.keys(params).length !== 0) {
    const p = new URLSearchParams();
    for (const key in params) {
      const value = params[key] as string;
      p.append(key, value);
    }
    paramsStr = `?${p.toString()}`;
  }
  return await new Promise((resolve, reject) => {
    $fetch<R<T>>(`${url}${paramsStr}`, {
      method,
      body: JSON.stringify(body),
      headers,
      ...extraParams
    })
      .then(res => {
        if (isServer) {
          resolve(res);
        } else {
          switch (res.code) {
            case 401:
            case 403:
              navigateTo("/login");
              break;
            default:
              resolve(res);
          }
        }
      })
      .catch((e: any) => {
        console.log(e);
        reject(e);
      });
  });
}
export { request };
