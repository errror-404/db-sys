"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout'

export default function Databases() {
    const [databases, setDatabases] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/api/endpoints").then(({ data }) => setDatabases(data.result))
    }, [])


    return (
        <Layout title={"Databases"}>
            {databases.map((item, _i) => (
                <Card title={item.Database} key={_i} url={`tables`} />
            ))}

        </Layout>
    )
}

