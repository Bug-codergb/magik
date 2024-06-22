import {NextRequest, NextResponse} from "next/server";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from 'next/headers'
import {IMenu} from "@/app/interface/IMenu";
import getFirstMenu from "@/app/utils/getFirstMenu";
import {redirect} from "next/navigation";
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest):Promise<never|NextResponse<any>>{
  try{
    const user = await request.json();
    const res = await fetch("http://localhost:8888/login",{
      method:"post",
      body:JSON.stringify(user),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const ret = await res.json();
    if(ret.code === 200){
      const response = await fetch(`http://localhost:8888/menu/list/user/${ret.data.userId}`,{
        method:"post",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      const userMenuData = await response.json();
      if(userMenuData.code === 200){
        const menuList:IMenu[] = userMenuData.data||[];
        if(menuList.length!==0){
          const menu = getFirstMenu(menuList[0]);
          if(menu) {
            cookies().set("authorization", ret.data.token);
            return NextResponse.json({
              code:200,
              data:{
                ...ret.data,
                menu:menu
              },
              message:"success"
            })
          }
        }else{
          return NextResponse.json({
            code:403,
            message:"您没有菜单权限"
          })
        }
      }
    }
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
