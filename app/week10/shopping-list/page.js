"use client";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import {getItems, addItem} from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const loadItems = async () => {
        const items = await getItems(user.uid);
        setItems(items);
    }

    useEffect(() => {
        loadItems();
    }, [items]);

    const handleAddItem = async (item) => {
        const itemId = await addItem(user.uid, item);
        item.id = itemId;
        setItems([...items, item]);
    }
    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');
        console.log("Selected item: ", cleanedItemName);
        setSelectedItemName(cleanedItemName);
    }

    if (!user) {
        alert("Please sign in to see the shopping list");
        redirect("/week10/page.js", "replace");
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