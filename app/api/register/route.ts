import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
      statuss: 200,
      oks: true,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      statuss: 200,
      oks: false,
    });
  }
  //   const { name, email, password } = body;
  //   const user = await prisma.user.create({
  //     data: {
  //       name,
  //       email,
  //       password,
  //     },
  //   });
  //   return {
  //     status: 200,
  //     body: {
  //       message: "User created successfully",
  //       data: user,
  //     },
  //   };
}
