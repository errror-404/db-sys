"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import axios from "axios";
import Card from "../components/Card";
import Link from "next/link";
import CardSkeleton from "../components/CardSkeleton";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const search = useSearchParams();

  const database = search.get("database");

  useEffect(() => {
    axios
      .post(`http://localhost:3000/api/endpoints/${database}`)
      .then(({ data }) => setTables(data.tables));
  }, [search, database]);

  return (
    <Layout title={"Tables"}>
      <div
        className="grid 
        grid-cols-3
      
        gap-20
        "
      >
        {tables.length === 0 ? (
          <CardSkeleton number={6} />
        ) : (
          tables.map((item, _i) => (
            <Link
              href={{
                pathname: "/records",
                query: { database: database, table: item },
              }}
              key={_i}
            >
              <Card title={item} key={_i} url={`records`} />
            </Link>
          ))
        )}
        <button
          className="
          bg-blue-500 p-3 w-1/3 rounded-full text-white hover:bg-blue-400 focus:outline-none my-1
        "
          onClick={() => window.history.back()}
        >
          Atras
        </button>
      </div>
    </Layout>
  );
};

export default Tables;
