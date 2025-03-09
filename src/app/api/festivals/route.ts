import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1"; // 기본값 1

  const api = process.env.FESTIVALS_API_URL;
  const params = `&numOfRows=12&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&eventStartDate=20241017`;
  const key = process.env.FESTIVALS_API_KEY;

  const response = await fetch(
    `${api}/searchFestival1?serviceKey=${key}${params}`
  );
  const data = await response.json();

  return NextResponse.json(data);
}
