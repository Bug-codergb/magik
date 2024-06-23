import {R} from "@/app/interface/R";

export interface IConfig{
  url:string;
  method?:"get"|"post"|"delete"|"put",
  params?:Record<string, any>,
  body?:Record<string,any>,
  headers?:Record<string, any>,
  extraParams?:Record<string, any>
}
function request<T=any>(config:IConfig):Promise<R<T>>{
  const {
    url,
    method="post",
    params,
    body,
    headers={
      "Content-Type": "application/json;charset=UTF-8",
    },
    extraParams={}
  } = config;
  const isGet = method === "get";
  let paramsStr="";
  if(params && Object.keys(params).length!==0){
    const p = new URLSearchParams();
    for(const key in params){
      p.append(key,params[key]);
    }
    paramsStr =`?${p.toString()}`;
  }
  return new Promise((resolve,reject)=>{
    fetch(`${url}${paramsStr}`,{
      method,
      body:JSON.stringify(body),
      headers,
      ...extraParams
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      resolve(res);
    }).catch((e:any)=>{
      reject(e);
    })
  })
}
export {
  request
}
