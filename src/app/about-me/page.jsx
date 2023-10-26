export const metadata = {
  title: 'About Me',
}

export default function AboutMe() {
    return (
      <>
      <div >
        <div className={`bg-[url('../../public/bg/home/home_bg.jpg')] bg-cover bg-center h-full py-40`}>
          <h3 className="text-6xl text-left font-bold py-8 pl-20 pr-80 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">About Me</h3>
        </div>
      </div>
      </>
    )
  }