import Footer from "../components/footer";
import Header from "../components/header";
import CommunitySection from "../sections/institutes/community";
import InstitutesSection from "../sections/institutes/institutes";
import IntroSection from "../sections/institutes/intro";
import NumbersSection from "../sections/institutes/numbers";

const Institutes = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <NumbersSection />
      <InstitutesSection />
      <CommunitySection />
      <Footer />
    </>
  )
}

export default Institutes;