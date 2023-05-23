"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Card from "../components/Card";

const Records = () => {
  const [tableRecords, setRecords] = useState([]);
  const search = useSearchParams();

  const records = search.get("table");
  const database = search.get("database");

  useEffect(() => {
    axios
      .post(`http://localhost:3000/api/records/${records}`, {
        database: database,
      })
      .then(({ data }) => setRecords(data.tables));
  }, [search]);

  if (tableRecords.length === 0)
    return (
      <Layout title={"Registros"}>
        <h1>No hay registros</h1>
        <button
          className="
          bg-blue-500 p-3 w-1/3 rounded-full text-white hover:bg-blue-400 focus:outline-none my-1
        "
          onClick={() => window.history.back()}
        >
          Atras
        </button>
      </Layout>
    );

  return (
    <Layout title={"Registros"}>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="border-t-2">
                    {tableRecords.length > 0 &&
                      Object.keys(tableRecords[0]).map((key) => (
                        <th scope="col" className="px-6 py-4 ">
                          {key}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRecords.map((item, _i) => (
                    <tr className="border-t border-neutral-200 dark:border-neutral-700">
                      {Object.values(item).map((value) => (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                {value}
                              </div>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

export default Records;
