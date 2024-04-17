import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(Req: Request, Res: Response) {
  try {
    const req: { userJWT: string } = await Req.json();

    const userObject = jwt.verify(
      req.userJWT,
      process.env.JWT_SECRET as string
    );

    return NextResponse.json({ status: 200, user: userObject });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
