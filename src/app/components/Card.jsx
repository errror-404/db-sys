"use client";
import Link from "next/link";
import React from "react";

const Card = ({ title, subtitle }) => {
  return (
    <div className="p-3 shadow-xl w-96 flex justify-center h-20 cursor-pointer">
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
