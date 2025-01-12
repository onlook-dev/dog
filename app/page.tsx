const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      filter: "contrast(120%) brightness(120%)",
    }}
  />
);

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]" />

    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFE66D]/30 to-transparent animate-gradient" />

    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* Primary floating elements */}
      <div className="absolute w-[50vw] h-[50vw] bg-[#FF6B6B] rounded-full mix-blend-soft-light blur-3xl animate-float-slow opacity-70 top-[-15%] left-[-10%]" />

      <div className="absolute w-[45vw] h-[45vw] bg-[#4ECDC4] rounded-full mix-blend-soft-light blur-3xl animate-float-delayed opacity-70 top-[60%] right-[-8%]" />

      {/* Secondary floating elements */}
      <div className="absolute w-[35vw] h-[35vw] bg-[#FFE66D] rounded-full mix-blend-soft-light blur-2xl animate-float top-[20%] left-[60%] opacity-60" />

      <div className="absolute w-[40vw] h-[40vw] bg-[#45B7D1] rounded-full mix-blend-soft-light blur-3xl animate-float-reverse opacity-70 top-[40%] left-[-5%]" />

      {/* Accent elements */}
      <div className="absolute w-[25vw] h-[25vw] bg-[#FF6B6B] rounded-full mix-blend-soft-light blur-2xl animate-pulse opacity-60 top-[10%] right-[20%]" />

      {/* Additional dynamic elements */}
      <div className="absolute w-[30vw] h-[30vw] bg-[#4ECDC4] rounded-full mix-blend-soft-light blur-3xl animate-float-slow opacity-50 bottom-[10%] left-[30%]" />

      <div className="absolute w-[20vw] h-[20vw] bg-[#FFE66D] rounded-full mix-blend-soft-light blur-2xl animate-spin-slow opacity-40 top-[30%] right-[40%]" />

      {/* Sparkle effects */}
      <div className="absolute w-[10vw] h-[10vw] bg-white rounded-full mix-blend-soft-light blur-xl animate-pulse opacity-30 top-[15%] left-[25%]" />

      <div className="absolute w-[8vw] h-[8vw] bg-white rounded-full mix-blend-soft-light blur-xl animate-pulse opacity-30 bottom-[20%] right-[15%]" />
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden flex-col gap-0">
      <AnimatedBackground />
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
            <div className="w-full rounded-[50px] bg-[#ffffff] h-[9px]"></div>
          </div>
        </div>
      </div>
      {/* Dog body */}
      <div className="flex flex-col items-center -mt-[30px]">
        <div className="w-[400px] h-[250px] bg-[#644800] rounded-[40px] border-[10px] border-[#ffffff] relative">
          {/* Front legs */}

          <div className="absolute top-[40px] right-[-170px] bg-[#644800] rounded-[15px] border-[10px] border-[#ffffff] transform rotate-[-20deg] h-[51px] w-[181px] rounded-tr-[45px] rounded-br-[45px] rounded-tl-[85px]" />

          <div className="absolute bottom-[-80px] left-[40px] h-[100px] bg-[#644800] rounded-[20px] border-[10px] border-[#ffffff] w-[64px]" />

          {/* Back legs */}

          {/* Tail */}

          <div className="absolute bottom-[-60px] left-[120px] bg-[#644800] rounded-[20px] border-[10px] border-[#ffffff] w-[66px] h-[118px]" />

          <div className="absolute bottom-[-80px] right-[40px] h-[100px] bg-[#644800] rounded-[20px] border-[10px] border-[#ffffff] w-[69px]" />

          <div className="absolute bottom-[-60px] right-[120px] bg-[#644800] rounded-[20px] border-[10px] border-[#ffffff] w-[69px] h-[117px]" />
        </div>
      </div>
      <p className="mt-[60px] flex flex-col justify-center items-center w-fit px-12 py-6 text-[56px] font-bold text-white tracking-wide rounded-2xl border-4 border-white/30 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] shadow-lg backdrop-blur-sm">
        Welcome to my personal website
      </p>
    </div>
  );
}
