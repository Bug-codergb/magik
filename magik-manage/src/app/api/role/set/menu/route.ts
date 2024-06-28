import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest){
  try{
    const params = await request.json();
    const res = await fetch(`http://localhost:8888/role/set/menu`,{
      method:"post",
      body:JSON.stringify(params),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const ret = await res.json();
    revalidateTag("user-role-menu");
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
