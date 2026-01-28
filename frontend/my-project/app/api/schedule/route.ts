  import { NextResponse } from "next/server"

  export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const date = searchParams.get("date")

    
    const res = await fetch(
      `http://127.0.0.1:8080/api/schedule?date=${date}`
    )

    const data = await res.json()
    return NextResponse.json(data)
  }
