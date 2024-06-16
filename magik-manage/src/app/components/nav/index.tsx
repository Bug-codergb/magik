import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { IMenu } from "@/app/interface/IMenu";
import { formatMenu } from "@/app/utils/formatMenu";
type MenuItem = Required<MenuProps>["items"][number];

async function getData(){
  const res = await fetch("http://localhost:3000/api/menu/list?page=1&limit=1000", {
    method: "post",
    cache:'force-cache'
  });
  const ret = await res.json();
  return ret.rows;
}

export default async  function() {
  let rawNav:any[]=[];
  let menu = await getData()
  rawNav = formatMenu(menu);
  //const [nav, setNav] = useState<IMenu[]>([]);
  //const router = useRouter()

  //const [rawNav, setRawNav] = useState<MenuItem[]>([]);
  // useEffect(() => {
  //   if (nav && nav.length !== 0) {
  //     const ret = formatMenu(nav);
  //     setRawNav(ret);
  //   }
  // }, [nav]);
  const onClick = (e:any) => {
    const path:string = e.item.props.path;
    console.log(path);
  };

  return (
    <div className={"size-full text-slate-950 flex flex-col"}>
      <div className={"h-16 text-slate-950"}></div>
      <Menu
        //onClick={onClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={["1717422759317"]}
        defaultOpenKeys={["1717421156223"]}
        mode="inline"
        items={rawNav}
        className={"flex-1 overflow-y-auto"}
      />
    </div>
  );
};

