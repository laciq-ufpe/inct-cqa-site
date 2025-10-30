const IntroSection = () => {
    return (
        <div className="w-full pt-30 pb-15 relative flex justify-left">
            <div
                style={{backgroundImage: "url('public/background2.jpg')"}}
                className="w-full h-full bg-no-repeat bg-cover bg-center blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
            ></div>
            <div className="px-30 z-2">
                <h1 className="text-4xl mt-10 text-5xl/14 font-bold">Institutos Participantes</h1>
                <p className="text-md w-3/5 mt-5 text-lg font-medium">Conheça as instituições acadêmicas de excelência que fazem parte desta iniciativa colaborativa.</p>
            </div>
        </div>
    );
}

export default IntroSection;
