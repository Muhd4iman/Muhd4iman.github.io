export default function NavBar() {
    return (
      <>
      <div className="py-1 px-4 text-right bg-stone-600 text-sky-500">
            <ul className="inline-flex text-xl">
                <li className="px-4 hover:font-bold">BM</li>
                <li className="px-4 hover:font-bold">ENG</li>
            </ul>
        </div>
        <div className="p-4 text-right bg-[#FDF4DC]">
            <ul className="inline-flex text-xl">
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">Home</li>
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">About Me</li>
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">Education</li>
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">Employment</li>
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">Achievement</li>
                <li className="px-4 decoration-[3px] hover:font-bold hover:underline hover:decoration-sky-500">Project</li>
            </ul>
        </div>
      </>
    )
  }