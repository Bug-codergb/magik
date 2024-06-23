import {NextRequest, NextResponse} from "next/server";
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest,{params}:{params:{id:string}}){
  try{
    const {id} = params;
    const res = await fetch(`http://localhost:8888/menu/delete/${id}`,{
      method:"post",
      body:JSON.stringify(params),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const ret = await res.json();
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
