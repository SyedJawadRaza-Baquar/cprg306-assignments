import ItemList from "./item-list";

export default function Page() {
    return (
        <>
        <main className="px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            <h1 >Shopping List</h1>
            <ItemList />
        </main>
        </>
    );
}