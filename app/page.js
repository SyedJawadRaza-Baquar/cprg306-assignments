import StudentInfo from "./studentInfo"
import Link from 'next/link'

export default function Page() {
  return (
    <>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <nav>
    <Link href="/week2">Week-2</Link>
    </nav>
    </>
  );
}