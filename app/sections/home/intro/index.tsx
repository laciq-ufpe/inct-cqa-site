const IntroSection = () => {
    return (
        <div className="w-full pt-30 pb-15 relative flex justify-center">
            <div
                style={{backgroundImage: "url('/background.jpg')"}}
                className="w-full h-full bg-no-repeat bg-cover blur-[2px] bg-neutral-800/75 absolute top-0 bg-blend-multiply"
            ></div>
            <div className="w-8/10 md:w-3/4 lg:w-1/2 z-2">
                <h1 className="text-6xl text-white text-center mt-10 text-5xl/14 font-bold">
                    INCT-CQA
                </h1>
                <p className="text-xl text-white text-center mt-5 text-lg font-medium">
                    Institutos Nacionais de Ciência e Tecnologia <br/> <span className=" text-red-500">Computação Quântica Aplicada</span>
                </p>
            </div>
        </div>
    )
}

export default IntroSection;