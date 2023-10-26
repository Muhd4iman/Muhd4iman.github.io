export const metadata = {
  title: 'Employment',
}

export default function Employment() {
    return (
      <>
      <div >
        <div className={`bg-[url('../../public/bg/home/home_bg.jpg')] bg-cover bg-center h-full py-40`}>
          <h3 className="text-6xl text-left font-bold py-8 pl-20 pr-80 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Employment</h3>
        </div>
      </div>
      <div className="text-lg text-left py-20 px-20">
        <h3 className="font-bold text-xl">CURRENT</h3>
        <p className="text-lg">Practical Trainee at MDEC (September 2023 - March 2024): work as a website developers</p>
        <br />
        <br />
        <h3 className="font-bold text-xl">PAST</h3>
        <p className="text-lg">N/A</p>
      </div>
      </>
    )
  }