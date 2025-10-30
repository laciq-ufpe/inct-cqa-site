import TopicCard from "../../../components/topic-card";
import { Users, Building2, BookOpen } from "lucide-react"
import HighlightedIcon from "../../../components/highlighted-icon";

const TopicsSection = () => {
    return (
        <div className="px-30 py-20 bg-neutral-200 flex flex-row gap-x-10 justify-center relative overflow-hidden">
            <TopicCard
                icon={
                    <HighlightedIcon icon={<Building2 style={{color: "var(--color-red-800)"}} />} />
                }
                title={"Instituições Parceiras"}
                description={"Colaboração entre as principais universidades e centros de pesquisa do país."}
            />
            <TopicCard
                icon={
                    <HighlightedIcon icon={<Users style={{color: "var(--color-red-800)"}} />} />
                }
                title={"Pesquisadores Renomados"}
                description={"Equipe multidisciplinar de especialistas comprometidos com a excelência."}
            />
            <TopicCard
                icon={
                    <HighlightedIcon icon={<BookOpen style={{color: "var(--color-red-800)"}} />} />
                }
                title={"Conhecimento Compartilhado"}
                description={"Promovendo a troca de ideias e o desenvolvimento de projetos inovadores."}
            />
            <div className="absolute w-200 h-200 -bottom-100 -left-100 z-0"  style={{backgroundColor: "rgba(229, 229, 229, 0)", background: "radial-gradient(circle, rgba(229, 229, 229, 0) 40%, rgba(179, 70, 70, 0.35) 50%, rgba(229, 229, 229, 0) 60%)"}}></div>
            <div className="absolute w-200 h-200 -top-100 -right-75 z-0"  style={{backgroundColor: "rgba(229, 229, 229, 0)", background: "radial-gradient(circle,rgba(229, 229, 229, 0) 40%, rgba(179, 70, 70, 0.35) 50%, rgba(229, 229, 229, 0) 60%)"}}></div>
        </div>
    );
}

export default TopicsSection;
