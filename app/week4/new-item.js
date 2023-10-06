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
        const { name, quantity, category } = item;
        console.log(item);
        alert(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
            />
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
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
}