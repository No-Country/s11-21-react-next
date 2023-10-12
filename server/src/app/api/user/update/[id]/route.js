import { NextResponse } from "next/server";
import { UserModel } from "@/models/User";

export async function PUT(request, { params }) {
    const body = await request.json();
    const { updateData } = body;
    const updateUser = await UserModel.updateUser(params.id, updateData);
    return NextResponse.json('Update user: '+ JSON.stringify( updateUser ) );
}