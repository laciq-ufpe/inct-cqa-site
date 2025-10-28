import Footer from "~/components/footer";
import Header from "~/components/header";
import EventSection from "~/sections/about/event";
import IntroSection from "~/sections/about/intro";
import ScienceSection from "~/sections/about/science";
import ValuesSection from "~/sections/about/values";

const About = () => {
    return (
        <>
            <Header />
            <IntroSection />
            <ValuesSection />
            <EventSection />
            <ScienceSection />
            <Footer />
        </>
    );
}

export default About;
