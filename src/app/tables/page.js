"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Layout from '../components/Layout'
import { usePathname, useParams } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const query = router.query
    console.log(query)

    const param = useParams()

    console.log(param)




    return (
        <Layout title={"Tables"}>

        </Layout>
    )
}

export default page