import { NextResponse } from "next/server";
import { UserModel } from "@/models/User";

export async function DELETE(request, { params }) {
    const idUser = await UserModel.deleteUser(params.id);
    return NextResponse.json('Delete userDB: '+ JSON.stringify( idUser ) );
}