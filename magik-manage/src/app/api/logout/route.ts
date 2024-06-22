import {NextRequest, NextResponse} from "next/server";
import { cookies } from 'next/headers'


export const dynamic = 'force-dynamic'
export async function POST(request:NextRequest){
  try{
    cookies().delete("authorization");
    return NextResponse.json({message:"success",code:200});
  }catch (e:any) {
    return NextResponse.json({message:e.message})
  }
}
