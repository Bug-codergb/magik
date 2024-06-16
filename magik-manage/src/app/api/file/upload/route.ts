import {NextRequest, NextResponse} from "next/server";
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest){
  try{
    const params = await request.formData();
    const res = await fetch(`http://localhost:8888/file/upload`,{
      method:"post",
      body:params,
    });
    const ret = await res.json();
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
