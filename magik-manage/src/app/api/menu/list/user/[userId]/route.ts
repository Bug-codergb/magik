import {NextRequest, NextResponse} from "next/server";
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest,{params}:{params:{userId:string}}){
  try{
    const {userId} = params;
    console.log(request.headers.get("Authorization"))
    const res = await fetch(`http://localhost:8888/menu/list/user/${userId}`,{
      method:"post",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization":request.headers.get("Authorization") || ""
      },
    });
    const ret = await res.json();
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
