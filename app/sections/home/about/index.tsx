const AboutSection = () => {
    const textClasses = "text-lg text-justify mt-5 text-white"

    return (
        <div className="w-full px-10 lg:px-30 pt-25 pb-20 text-neutral-200 bg-neutral-950 before-drop relative">
            <h1 className="text-4xl text-white font-bold text-center mb-7">O que é o INCT-CQA?</h1>
            <p className={textClasses}>
                O principal objetivo deste projeto é a busca da vantagem quântica através de métodos da inteligência artificial. A vantagem quântica será obtida quando for possível resolver determinados problemas de forma mais eficiente em dispositivos quânticos do que em supercomputadores clássicos. Enquanto a vantagem teórica dos algoritmos quânticos é bem estabelecida, a aplicação prática da computação quântica ainda não é uma realidade devido ao atual estágio de desenvolvimento dos computadores quânticos.
            </p>
            <p className={textClasses}>
                Para alcançar este objetivo será utilizada inteligência artificial para aprimorar o desenvolvimento de algoritmos quânticos e softwares de dispositivos quânticos, além da investigação de modelos quânticos de aprendizagem de máquina, suas limitações e algoritmos de treinamento. Serão realizadas avaliações em dispositivos quânticos reais para problemas em diversas áreas do conhecimento, por exemplo, finanças, simulação de sistemas físicos, otimização e logística entre outros.
            </p>
            <p className={textClasses}>
                A formação de pessoal altamente qualificado na área de computação quântica é um desafio devido à interdisciplinaridade da área. Este projeto terá como objetivo a formação de doutores, mestres e graduados com expertise na área de computação quântica e inteligência artificial, permitindo que tenhamos capital humano pronto para o desenvolvimento de softwares quânticos.
            </p>
        </div>
    )
}

export default AboutSection;