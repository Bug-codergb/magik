import {NextRequest, NextResponse} from "next/server";

export async function POST(request:NextRequest){
  try{
    const reqBody = await request.json();
    console.log(reqBody);
    let user={
      name:"guobin"
    }
    return NextResponse.json({
      user:user,
    },{status:200});
  }catch (e:any) {
    return NextResponse.json({error:e.message},{status:500})
  }
}
