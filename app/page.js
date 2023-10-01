import StudentInfo from "./studentInfo"
import Link from 'next/link'

export default function Page() {
  return (
    <>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <ul>
    <nav>
    <li><Link href="/week2">Week-2</Link></li>
    <li><Link href="/week3">Week-3</Link></li>
    </nav>
    </ul>
    </>
  );
}