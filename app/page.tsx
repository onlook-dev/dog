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
                <div className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] bg-transparent border-[20px] border-[#ffffff]"></div>
                <div className="rounded-tl-[50px] rounded-tr-[50px] h-[120px] w-[286px] text-[#cc2626] bg-transparent border-[20px] border-[#ffffff]"></div>
            </div>
            <div className="text-center relative z-10 p-[12] text-[29px] text-[#fff500] rounded-[62px] flex flex-col gap-0 h-[380px] w-[37%] border-[20px] bg-[#ff2222]">
                <h1 className="font-semibold tracking-tight text-[100px] w-full rounded-[5px] p-[20px] h-full m-0 text-[#ffffff] border-0 bg-transparent">
                    0 0
                </h1>

                <div className="flex justify-center flex-col items-center gap-[40px] mb-[60px] p-[10px] pr-[40px] pb-0 pl-[30px] w-full h-[fit-content] border-0 bg-transparent">
                    <div className="rounded-[20px] w-[129px] h-[41px] border-0 bg-[#ffffff]"></div>
                    <div className="bg-[#E3F3FF] w-full rounded-[50px] h-[11px]"></div>
                </div>
            </div>
            <p className="h-[107px] text-[#ffffff] flex flex-col justify-center items-center w-[fit-content] m-[50px] border-0 bg-transparent text-[56px] font-bold">
                Welcome to my personal website
            </p>
        </div>
    );
}
