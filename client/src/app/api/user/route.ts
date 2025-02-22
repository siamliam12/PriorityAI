import { db } from "@/lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST() {
    try {
        const {userId} = await auth()
        const user = await currentUser()
        
        if (!userId || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const existingUser = await db.user.findUnique({
            where: {
                clerkId: userId
            }
        })

        if (existingUser) {
            return NextResponse.json(existingUser)
        }

        const saveNewUser = await db.user.create({
            data: {
                clerkId: userId,
                name: `${user.firstName || ""} ${user.lastName || ""}`,
                username: user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
                email: user.emailAddresses[0].emailAddress,
            }
        })

        return NextResponse.json(saveNewUser)
    } catch (error) {
        console.error("Error in saving User to database:", error)
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        )
    }
}