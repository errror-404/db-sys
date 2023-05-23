import { NextResponse } from "next/server";
import excuteQuery from "../../db";

export async function POST(request, { params }) {
  const res = await request.json();

  console.log(res, params);

  try {
    const result = await excuteQuery({
      query: `Select * from ${res.database}.${params.records}`,
    });

    console.log(result);
    return NextResponse.json({ tables: result });
  } catch (error) {
    console.log(error);
  }
}
