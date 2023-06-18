import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import SignupSchema from "@/app/libs/validations/SignupSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const result = await SignupSchema.validateAsync(body);
    console.log(result);
    return NextResponse.json({
      statuss: 200,
      oks: true,
    });
  } catch (e: any) {
    if (e.name === "ValidationError") {
      return NextResponse.json({
        statuss: 200,
        oks: false,
        message: e.message,
      });
    }
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
