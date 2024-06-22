import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { IMenu } from "@/app/interface/IMenu";
import { formatMenu } from "@/app/utils/formatMenu";
import getFirstMenu from "@/app/utils/getFirstMenu"
type MenuItem = Required<MenuProps>["items"][number];

async function getData(){
  const res = await fetch("http://localhost:3000/api/menu/list/user/110", {
    method: "post",
    next:{
      revalidate:3
    }
  });
  const ret = await res.json();
  return ret.data;
}
export default async  function() {
  let menu:IMenu[] = await getData()
  const rawNav = formatMenu(menu);
  const firstMenu =getFirstMenu(menu[0]);
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

