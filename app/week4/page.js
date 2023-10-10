import NewItem from "./new-item";

export default function Page() {
    return (
        <div className="flex-grow :1 w-25 h-25 px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            <NewItem />
        </div>
    );
}