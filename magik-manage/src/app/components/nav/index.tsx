import React from "react";
import { cookies } from 'next/headers'
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { IMenu } from "@/app/interface/IMenu";
import { formatMenu } from "@/app/utils/formatMenu";
import getFirstMenu from "@/app/utils/getFirstMenu"
import {R} from "@/app/interface/R";
type MenuItem = Required<MenuProps>["items"][number];

async function getData():Promise<R<IMenu[]>>{
  const auth=cookies().get("authorization");
  const userId = cookies().get("user-id");
  const res = await fetch(`http://localhost:8888/menu/list/user/${userId?userId.value:''}`, {
    method: "post",
    next:{
      revalidate:3
    },
    headers:{
      "Authorization":auth?auth.value:""
    }
  });
  const ret = await res.json();
  return ret;
}
export default async  function() {
  let res:R<IMenu[]> = await getData();
  let rawNav:any[] = []
  let firstMenu=null;
  if(res.code === 200){
    rawNav = formatMenu(res.data);
    firstMenu =getFirstMenu(res.data[0]);
  }
  return (
    <div className={"size-full text-slate-950 flex flex-col"}>
      <div className={"h-16 text-slate-950"}></div>
      <Menu
        //onClick={onClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={[firstMenu ? firstMenu.id:""]}
        defaultOpenKeys={[firstMenu ? firstMenu.id:""]}
        mode="inline"
        items={rawNav}
        className={"flex-1 overflow-y-auto"}
      />
    </div>
  );
};

