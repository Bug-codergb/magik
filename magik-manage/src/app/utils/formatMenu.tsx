import {IMenu} from "@/app/interface/IMenu";
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
export function formatMenu(menu:IMenu[]):MenuItem[]{
  let ret:MenuItem[] = [];
  if(!menu||menu.length===0){
    return ret;
  }
  for(let item of menu){
    let row:MenuItem={
      key:item.id,
      label:item.title,

      children:item.children && item.children.length!==0 ? formatMenu(item.children) : undefined
    }
    ret.push(row)
  }
  return ret;
}
