"use client";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');
        console.log("Selected item: ", cleanedItemName);
        setSelectedItemName(cleanedItemName);
    }

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    if (!user) {
        alert("Please sign in to see the shopping list");
        redirect("/week8/page.js", "replace");
    } else {
        return (
            <main className="flex flex-col w-screen h-screen px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
                <h1 >Shopping List</h1>
                <ItemList items={items} onItemSelect={handleItemSelect} />
                <NewItem onAddItem={handleAddItem} />
                <MealIdeas ingredient={selectedItemName} />
            </main>
        );
    }
}