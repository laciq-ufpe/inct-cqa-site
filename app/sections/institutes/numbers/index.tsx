const NumbersSection = () => {
    return (
        <div className="px-30 py-20 bg-neutral-200 flex flex-row justify-between">
            <div className="px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">6</h1>
                <p className="text-md text-neutral-600 text-center">Instituições Parceiras</p>
            </div>
            <div className="px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">15+</h1>
                <p className="text-md text-neutral-600 text-center">Áreas de Pesquisa</p>
            </div>
            <div className="px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">5</h1>
                <p className="text-md text-neutral-600 text-center">Estados Representados</p>
            </div>
        </div>
    );
}

export default NumbersSection;
