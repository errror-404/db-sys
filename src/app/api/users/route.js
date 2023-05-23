import { NextResponse } from "next/server";
import excuteQuery from "../db";

export async function GET() {
  try {
    const result = await excuteQuery({
      query:
        "SELECT SUBSTRING_INDEX(host, ':', 1) AS host_short, GROUP_CONCAT(DISTINCT user) AS users, COUNT(*) AS threads FROM information_schema.processlist GROUP BY host_short ORDER BY COUNT(*), host_short",
    });
    console.log(result);
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
  }
}
