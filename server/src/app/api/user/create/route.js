import { NextResponse } from "next/server";
import { UserModel } from "@/models/User";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    const userTest = await UserModel.createUser(email, name);
    return NextResponse.json({ userTest }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
