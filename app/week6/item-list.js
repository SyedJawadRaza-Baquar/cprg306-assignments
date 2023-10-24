"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  items.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);

      return(
        <>
        {items.map((item) => (
            <Item key={item.id} item = {item} />
        ))}
        <div className="flex justify-between mx-80 ">
        <button className={`${sortBy === "name" ? "bg-zinc-600" : "bg-white"} p-4 h-13 items-center justify-center border-blue-800 rounded`} onClick={() => setSortBy("name")}>Sort by name</button>
        <button className={`${sortBy === "category" ? "bg-zinc-600" : "bg-white"} p-4 h-13 items-center justify-center border-blue-800 rounded`} onClick={() => setSortBy("category")}>Sort by category</button>
        </div>
        </>
      );
    }