import { NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(Req: Request, Res: Response) {
  try {
    const prisma = new PrismaClient();

    const req: {
      username: string;
      password: string;
      email: string;
      age: number;
    } = await Req.json();

    const checkUser = await prisma.users.findFirst({
      where: { username: req.username },
    });

    const checkEmail = await prisma.users.findFirst({
      where: { email: req.email },
    });

    if (checkUser || checkEmail) {
      return NextResponse.json({ status: 201 });
    }

    const hashedPassword = await bcrypt.hash(req.password, 10);

    const user = await prisma.users.create({
      data: {
        username: req.username,
        password: hashedPassword,
        email: req.email,
        age: req.age,
      },
    });

    const userJWT = jwt.sign(user, process.env.JWT_SECRET as string);

    return NextResponse.json({ status: 200, sessionJWT: userJWT });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: true });
  }
}
