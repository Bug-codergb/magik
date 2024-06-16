import {NextRequest, NextResponse} from "next/server";
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest,{params}:{params:{id:string}}){
  try{
    const body = await request.json();

    const res = await fetch(`http://localhost:8888/user/update/${params.id}`,{
      method:"post",
      body:JSON.stringify(body),
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
