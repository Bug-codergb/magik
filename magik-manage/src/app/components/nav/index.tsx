"use client";
import React, { FC, memo, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { Menu } from "antd";

import type { MenuProps } from "antd";
import { IMenu } from "@/app/interface/IMenu";
import { formatMenu } from "@/app/utils/formatMenu";
type MenuItem = Required<MenuProps>["items"][number];
const Nav: FC = (): React.ReactNode => {
  const [nav, setNav] = useState<IMenu[]>([]);
  const router = useRouter()
  useEffect(() => {
    fetch("/api/menu/list", {
      method: "post",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code === 200) {
          setNav(res.data);
        }
      });
  }, []);
  const [rawNav, setRawNav] = useState<MenuItem[]>([]);
  useEffect(() => {
    if (nav && nav.length !== 0) {
      const ret = formatMenu(nav);
      setRawNav(ret);
    }
  }, [nav]);
  const onClick = (e:any) => {
    const path:string = e.item.props.path;
    router.push(path,{
    })
  };

  return (
    <div className={"size-full text-slate-950"}>
      <div className={"h-16 text-slate-950"}></div>
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={rawNav}
      />
    </div>
  );
};
export default memo(Nav);
