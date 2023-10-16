import NewItem from "./new-item";

export default function Page() {
    return (
        <div className="flex justify-center items-centre w-screen h-screen px-4 py-4 m-4 text-red-600 text-xl font-bold bg-gray-400 rounded border-blue-800">
            <NewItem />
        </div>
    );
}