import Link from 'next/link'

export default function StudentInfo() {
    return (
        <main className="px-4 py-2 m-8 text-red-400 text-base text-center font-normal bg-slate-800 rounded hover:bg-zinc-600 border-blue-800">
            <h1>My Information</h1>
            <p>Name: Syed Jawad Raza Baquar</p>
            <p>Course Section: CPRG 306 B</p>
            <Link className= "text-decoration-line: underline" href="https://github.com/SyedJawadRaza-Baquar/cprg306-assignments">My GitHub repository</Link>
        </main>
    );
    }