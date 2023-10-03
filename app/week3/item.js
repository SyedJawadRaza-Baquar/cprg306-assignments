export default function Item({item}) {
    return (
        <ul className="px-4 py-2 m-8 text-red-400 text-base text-center font-normal bg-slate-800 rounded hover:bg-blue-600 border-blue-800">
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.category}</li>
        </ul>
    );
}