import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import SignupSchema from "@/app/libs/validations/SignupSchema";
import { ValidationError } from "joi";
import { generateToken } from "@/app/libs/token";

interface Form {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export async function POST(request: Request) {
  try {
    const body: Form = await request.json();
    const result = await SignupSchema.validateAsync(body);

    const { username, email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return NextResponse.json({
        statuss: 200,
        oks: false,
        message: "Email already exists",
      });
    }
    const createdUser = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword: password,
      },
    });
    const token = generateToken(createdUser.id);
    console.log(token);
    const response = NextResponse.json(
      {
        statuss: 200,
        oks: true,
      },
      {
        headers: {
          "Set-Cookie": `x-token=${token}; Path=/; HttpOnly; Max-Age=86400; SameSite=Lax`,
        },
      }
    );
    return response;
  } catch (e) {
    if (e instanceof ValidationError) {
      return NextResponse.json({
        statuss: 200,
        oks: false,
        message: e.message,
      });
    }
    // if (e.name === "ValidationError") {
    //   return NextResponse.json({
    //     statuss: 200,
    //     oks: false,
    //     message: e.message,
    //   });
    // }
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
