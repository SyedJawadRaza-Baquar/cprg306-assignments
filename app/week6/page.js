"use client" ;
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <>
        <main className="flex flex-col w-screen h-screen px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            <h1 >Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
        </>
    );
}