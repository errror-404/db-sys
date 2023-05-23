"use client";
import Link from "next/link";
import React from "react";

const Card = ({ title, subtitle, url }) => {
  const handleNavigation = () => {
    window.location.href = url;
  };

  return (
    <Link
      className="p-3 shadow-xl w-96 flex justify-center h-20 cursor-pointer"
      href={{ pathname: url, query: title }}
    >
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{subtitle}</p>
    </Link>
  );
};

export default Card;
