import StudentInfo from "./studentInfo"
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center text-red-600 text-xl font-bold bg-gray-400 rounded border-blue-800">
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <ul>
    <nav className="text-decoration-line: underline">
    <li><Link href="/week2">Week-2</Link></li>
    <li><Link href="/week3">Week-3</Link></li>
    <li><Link href="/week4">Week-4</Link></li>
    <li><Link href="/week5">Week-5</Link></li>
    <li><Link href="/week6">Week-6</Link></li>
    </nav>
    </ul>
    </main>
  );
}