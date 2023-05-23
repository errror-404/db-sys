import { NextResponse } from 'next/server';
import excuteQuery from '../db';

export async function GET() {
    try {
        const result = await excuteQuery({
            query: 'SHOW DATABASES',
        });
        console.log(result);
        return NextResponse.json({ result });

    } catch (error) {
        console.log(error);
    }

}