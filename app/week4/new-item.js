"use client";
import { useState } from "react";

export default function NewItem(){
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
        alert(JSON.stringify(item));
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form className="flex-col justify-center items-center">
            <label htmlFor="name">Name</label>
            <input className="flex-1"
                id="name"
                type="text"
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
            <input className="flex-1"
                id="quantity"
                type="number"
                value={quantity}
                min={1}
                max={99}
                required
                onChange={(event) => setQuantity(parseInt(event.target.value))}
            />
            <label htmlFor="category">Category</label>
            <select className="flex-1"
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
            <button className="flex-1" onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
}