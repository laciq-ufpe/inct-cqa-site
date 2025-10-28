import { Target, Lightbulb, Users2 } from "lucide-react";
import HighlightedIcon from "~/components/highlighted-icon";
import ValueCard from "~/components/value-card";

const ValuesSection = () => {
    return (
        <div className="px-30 py-20 bg-neutral-200">
            <div className="w-full flex flex-col bg-neutral-500/25 gap-y-[1px]">
                <div className="w-full bg-neutral-200 py-10">
                    <div className="flex flex-row gap-x-3 items-center mb-5">
                        <HighlightedIcon icon={<Target className="text-red-800" />} />
                        <h1 className="text-neutral-800 text-2xl font-semibold" >Nossa Missão</h1>
                    </div>
                    <p className="text-neutral-600 text-lg" >Fomentar a colaboração entre instituições acadêmicas de excelência, criando um ambiente propício para o desenvolvimento de pesquisas inovadoras e a formação de redes de conhecimento que transcendem fronteiras institucionais.</p>
                </div>
                <div className="w-full bg-neutral-200 py-10">
                    <div className="flex flex-row gap-x-3 items-center mb-5">
                        <HighlightedIcon icon={<Lightbulb className="text-red-800" />} />
                        <h1 className="text-neutral-800 text-2xl font-semibold" >Nossa Visão</h1>
                    </div>
                    <p className="text-neutral-600 text-lg" >Ser referência nacional em colaboração acadêmica interinstitucional, promovendo avanços científicos significativos e contribuindo para o desenvolvimento da ciência e tecnologia no país.</p>
                </div>
                <div className="w-full bg-neutral-200 py-10">
                    <div className="flex flex-row gap-x-3 items-center mb-5">
                        <HighlightedIcon icon={<Users2 className="text-red-800" />} />
                        <h1 className="text-neutral-800 text-2xl font-semibold" >Nossos Valores</h1>
                    </div>
                    <div className="flex flex-row justify-between gap-x-5 mb-5">
                        <ValueCard
                            title="Excelência"
                            description="Compromisso com os mais altos padrões de qualidade em pesquisa e ensino."
                        />
                        <ValueCard
                            title="Colaboração"
                            description="Trabalho conjunto e compartilhamento de recursos e conhecimentos."
                        />
                    </div>
                    <div className="flex flex-row justify-between gap-x-5">
                        <ValueCard
                            title="Excelência"
                            description="Compromisso com os mais altos padrões de qualidade em pesquisa e ensino."
                        />
                        <ValueCard
                            title="Colaboração"
                            description="Trabalho conjunto e compartilhamento de recursos e conhecimentos."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ValuesSection;
