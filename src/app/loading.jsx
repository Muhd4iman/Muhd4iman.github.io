export default function Loading() {
  return (
    <>
      <div className="min-h-screen bg-[#384593]">
        <div className="my-auto mx-auto container ">
        <div className="inline-flex items-center justify-center min-h-screen min-w-screen">
          <h1 className="text-[#fdb12a] font-bold text-4xl my-auto relative z-10">Loading</h1>
          <img src="/static/loading/loading.gif" className="w-[30%] -ml-12" />
        </div>
        </div>
      </div>
    </>
  );
}