"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setUsers(data.result);
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <Layout title={"Users"}>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="border-t-2">
                    <th scope="col" className="px-6 py-4 ">
                      Host_short
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Users
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Threads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {user.host_short}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.threads}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.users}
                      </td>
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

export default Users;
