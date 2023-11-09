export const metadata = {
  title: 'Home',
}

export default function Home() {
    return (
      <>
      <div >
        <div className={`bg-[url('../../public/static/home/home_bg.jpg')] bg-cover bg-center h-full py-40`}>
          <h3 className="text-6xl text-left font-bold py-8 pl-20 pr-80 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Welcome To My Page</h3>
        </div>
      </div>
      <div className="text-lg text-left py-8 px-8">
        <h3>Home</h3>
        <p>This page is create using Next.js Framework with Tailwind, i18Next packages.</p>
        <p>Hello and welcome to my page, my name is Muhammad Aiman Bin Kamarul Ariffin Lo. I am a Diploma in Computer Science from UiTM Kedah. </p>
      </div>
      </>
    )
  }