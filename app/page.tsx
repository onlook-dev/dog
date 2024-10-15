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
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#000000] flex-col gap-0">
      <div className="h-[138px] w-full bg-transparent flex items-end justify-center gap-40">
        <div className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] border-[20px] border-[#ffffff] bg-[#644800]"></div>
        <div
          className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] border-[#ffffff] bg-[#644800] border-[20px]"
          data-onlook-temp-id="a98d7eb2-6e76-4a64-966c-744043791d7e"
          key="onlook-1729006239683"
        ></div>
      </div>
      <div className="text-center relative z-10 p-[12] text-[29px] text-[#fff500] rounded-[62px] flex flex-col gap-0 h-[380px] w-[37%] border-[20px] bg-[#644800] border-[#ffffff] -mt-[20px]">
        <h1 className="font-semibold tracking-tight text-[100px] w-full rounded-[5px] p-[20px] m-0 text-[#ffffff] border-0 bg-transparent h-[170px]">
          -0  0-
        </h1>

        <div className="flex justify-center flex-col items-center mb-[60px] p-[10px] pr-[40px] pb-0 pl-[30px] w-full h-[fit-content] border-0 bg-transparent gap-0">
          <div className="rounded-[20px] w-[129px] bg-[#753400] border-[10px] h-[51px]"></div>
          <div
            className="h-[41px] border-0 w-[12px] rounded-none bg-[#ffffff]"
            data-onlook-temp-id="9c01d971-437b-4dc0-9849-091558662dd2"
            key="onlook-1729006348391"
          ></div>
          <div className="w-full rounded-[50px] h-[11px] bg-[#ffffff]"></div>
        </div>
      </div>
      <p className="h-[107px] text-[#ffffff] flex flex-col justify-center items-center w-[fit-content] m-[50px] border-0 bg-transparent text-[56px] font-bold tracking-[7px]">
        Welcome to my personal website
      </p>
    </div>
  );
}
