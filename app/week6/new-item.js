"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(item);
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form className="flex flex-col gap-4 bg-slate-800 rounded border-blue-800">
            <div><label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input 
                    id="quantity"
                    type="number"
                    value={quantity}
                    min={1}
                    max={99}
                    required
                    onChange={(event) => setQuantity(parseInt(event.target.value))}
                />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="bakery">Bakery</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button className= "bg-zinc-600 border-blue-800 rounded-lg" onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
}