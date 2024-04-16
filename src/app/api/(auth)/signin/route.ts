import { NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(Req: Request, Res: Response) {
  try {
    const prisma = new PrismaClient();

    const req: { username: string; password: string } = await Req.json();

    const checkUser = await prisma.users.findFirst({
      where: { username: req.username },
    });

    if (checkUser) {
      const checkPassword = await bcrypt.compare(
        req.password,
        checkUser.password
      );

      if (checkPassword) {
        const userJWT = jwt.sign(checkUser, process.env.JWT_SECRET as string);
        return NextResponse.json({ status: 200, sessionJWT: userJWT });
      } else {
        return NextResponse.json({ status: 404 });
      }
    } else {
      return NextResponse.json({ status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: true });
  }
}
