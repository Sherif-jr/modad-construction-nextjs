import { NextRequest, NextResponse } from "next/server";
interface Params {
  id: string;
}
export function GET(req: NextRequest, { params }: { params: Params }) {
  console.log(params);
  return NextResponse.json({ success: true, params: params });
}
