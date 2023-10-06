import StudentInfo from "./studentInfo"
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex-grow :1 w-25 h-25 px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <ul>
    <nav className="text-decoration-line: underline">
    <li><Link href="/week2">Week-2</Link></li>
    <li><Link href="/week3">Week-3</Link></li>
    <li><Link href="/week4">Week-4</Link></li>
    </nav>
    </ul>
    </main>
  );
}