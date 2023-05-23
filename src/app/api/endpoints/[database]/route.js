import { NextResponse } from "next/server";
import excuteQuery from "../../db";

export async function POST(request, { params }) {
  try {
    const result = await excuteQuery({
      query: `SHOW TABLES FROM ${params.database} `,
    });

    console.log(result);
    return NextResponse.json({
      tables: result.map((item) => item[`Tables_in_${params.database}`]), // [params.database]: result[0][`Tables_in_${params.database}`
    });
  } catch (error) {
    console.log(error);
  }
}
