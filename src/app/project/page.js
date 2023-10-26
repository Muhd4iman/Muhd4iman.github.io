export const metadata = {
  title: 'Project',
}

export default function Project() {
    return (
      <>
      <div >
        <div className={`bg-[url('../../public/bg/home/home_bg.jpg')] bg-cover bg-center h-full py-40`}>
          <h3 className="text-6xl text-left font-bold py-8 pl-20 pr-80 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Project</h3>
        </div>
      </div>
      <div className="text-lg text-left py-20 px-20">
        <h3 className="font-bold text-2xl">PROJECTS DURING DIPLOMA</h3>
        <h3 className="font-bold text-xl">1ST SEM</h3>
        <p className="text-lg"></p>
        <br />
        <h3 className="font-bold text-xl">2ND SEM</h3>
        <p className="text-lg"></p>
        <br />
        <h3 className="font-bold text-xl">3RD SEM</h3>
        <p className="text-lg"></p>
        <br />
        <h3 className="font-bold text-xl">4TH SEM</h3>
        <p className="text-lg"></p>
        <br />
        <h3 className="font-bold text-xl">5TH SEM (INTERNSHIP)</h3>
        <p className="text-lg"></p>
      </div>
      </>
    )
  }