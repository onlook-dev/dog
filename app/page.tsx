const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      filter: "contrast(120%) brightness(120%)",
    }}
  />
);

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden flex-col bg-[#6dfbaf] gap-[60px]">
      <div className="flex flex-col justify-center items-center grid-cols-none grid-rows-none w-[600px] gap-0">
        <div className="flex flex-row justify-center items-end grid-cols-none grid-rows-none gap-28 bg-[rgba(0,_0,_0,_0)] mb-0">
          <div className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] border-[#ffffff] bg-[#2c1400] border-[10px]"></div>
          <div className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] border-[#ffffff] bg-[#644800] border-[10px]"></div>
        </div>
        <div className="text-center relative z-10 p-[12] text-[29px] text-[#fff500] rounded-[62px] flex flex-col gap-0 h-[380px] bg-[#644800] border-[#ffffff] -mt-[10px] w-[560px] border-[10px]">
          <div className="bg-transparent w-full h-[130px] flex justify-center items-center gap-[30px] p-0">
            <div className="flex flex-row justify-center items-center grid-cols-none grid-rows-none gap-[50px] mt-0">
              <div className="w-[102px] h-[79px] rounded-[60px] border-[10px] bg-[#000000]">
                <div className="w-[39px] h-[30px] bg-[#E3F3FF] rounded-[60px]"></div>
              </div>
              <div className="flex flex-row justify-center items-center gap-[50px] grid-cols-none grid-rows-none bg-[#2c1400] p-[20px] rounded-[20px] rounded-tl-none rounded-tr-none">
                <div className="w-[102px] h-[79px] rounded-[60px] border-[10px] bg-[#000000] m-0 p-0">
                  <div className="w-[39px] h-[30px] bg-[#E3F3FF] rounded-[60px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mb-[60px] p-[10px] pr-[40px] pb-0 pl-[30px] w-full h-[fit-content] border-0 bg-transparent gap-0">
            <div className="flex flex-col justify-center items-center gap-0 grid-cols-none grid-rows-none text-[#804a03] bg-[#2c1400] p-[20px] pb-0 rounded-[30px] rounded-bl-none rounded-br-none">
              <div className="rounded-[20px] w-[129px] bg-[#753400] border-[10px] h-[51px]"></div>
              <div className="h-[41px] border-0 w-[12px] rounded-none bg-[#ffffff]"></div>
            </div>
            <div className="w-full rounded-[50px] h-[11px] bg-[#ffffff]"></div>
          </div>
        </div>
      </div>
      <p className="h-[107px] flex flex-col justify-center items-center w-[fit-content] text-[56px] font-bold text-[#000000] tracking-[0px] border-[10px] p-[10px] bg-[#ffc700] border-[#ff006b] m-0">
        Welcome to my personal website
      </p>
    </div>
  );
}
