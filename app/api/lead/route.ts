import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  organisation: string;
  role?: string;
  email: string;
  phone?: string;
  interest?: string;
  message?: string;
  isGovernment?: boolean;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  console.log("Lead submission:", {
    ...payload,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({ status: "ok" });
}
