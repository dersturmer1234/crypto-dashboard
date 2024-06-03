import { getCoinData } from "@/services/coinService"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const res = await getCoinData()
    return Response.json(res)
}
