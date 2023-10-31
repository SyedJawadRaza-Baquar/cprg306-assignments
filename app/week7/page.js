"use client";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        console.log("Selected item: ", cleanedItemName);
        setSelectedItemName(cleanedItemName);
    }

    return (
        <main className="flex flex-col w-screen h-screen px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            <h1 >Shopping List</h1>
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <NewItem onAddItem={handleAddItem} />
            <MealIdeas ingredient={selectedItemName} />
        </main>
    );
}