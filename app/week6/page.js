"use client" ;

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

const items = useState(itemsData);

const handleAddItem = (item) => {
    items.push(item);
}

export default function Page() {
    return (
        <>
        <main className="flex-direction: column w-screen h-screen px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            <h1 >Shopping List</h1>
            <ItemList {...items}/>
            <NewItem onAddItem={handleAddItem} />
        </main>
        </>
    );
}