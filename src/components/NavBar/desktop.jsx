"use client"
import { useRouter } from "next/navigation"

export default function NavBar() {
    const router = useRouter()

    return (
      <div className="sticky top-0">
        <div className="py-1 px-4 text-right bg-stone-600 text-sky-500">
            <ul className="inline-flex text-xl">
                <li className="px-4 hover:font-bold">BM</li>
                <li className="px-4 hover:font-bold">ENG</li>
            </ul>
        </div>
        <div className="p-4 text-right bg-[#FDF4DC]">
            <ul className="inline-flex text-xl">
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/')}>Home</button>
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/about-me')}>About Me</button>
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/education')}>Education</button>
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/employment')}>Employment</button>
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/achievement')}>Achievement</button>
                <button className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500" onClick={() => router.push('/project')}>Project</button>
            </ul>
        </div>
      </div>
    )
  }