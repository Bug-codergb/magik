import {NextRequest, NextResponse} from "next/server";
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest){
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
    cookies().set("authorization",ret.data.token)
    cookies().get("authorization")
    return NextResponse.json(ret);
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
