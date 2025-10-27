import Footer from "~/components/footer";
import Header from "~/components/header";
import AboutSection from "~/sections/home/about";
import CompQuantSection from "~/sections/home/comp-quant";
import IntroSection from "~/sections/home/intro";
import JoinSection from "~/sections/home/join";
import TopicsSection from "~/sections/home/topics";

const Home = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <AboutSection />
      <TopicsSection />
      <CompQuantSection />
      <JoinSection />
      <Footer />
    </>
  )
}

export default Home;