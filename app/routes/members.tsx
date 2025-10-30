import Footer from "../components/footer";
import Header from "../components/header";
import IntroSection from "../sections/members/intro";
import MembersListSection from "../sections/members/members-list";
import TeamSection from "../sections/members/team";

const Members = () => {
    return (
        <>
            <Header />
            <IntroSection />
            <MembersListSection />
            <TeamSection />
            <Footer />
        </>
    );
}

export default Members;
