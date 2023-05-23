"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Link from "next/link";
import CardSkeleton from "../components/CardSkeleton";

export default function Databases() {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/endpoints")
      .then(({ data }) => setDatabases(data.result));
  }, []);

  return (
    <Layout title={"Databases"}>
      {databases.length === 0 ? (
        <CardSkeleton number={3} />
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {databases.map((item, _i) => (
            <Link
              href={{
                pathname: "/tables",
                query: { database: item.Database },
              }}
              key={_i}
            >
              <Card title={item.Database} key={_i} />
            </Link>
          ))}
          <button
            className="
          bg-blue-500 p-3 w-1/3 rounded-full text-white hover:bg-blue-400 focus:outline-none my-1
        "
            onClick={() => window.history.back()}
          >
            Atras
          </button>
        </div>
      )}
    </Layout>
  );
}
