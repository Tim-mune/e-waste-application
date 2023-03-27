import { Footer } from "../components";
import {
  AboutNav,
  AboutUs,
  Faqs,
  FeaturesAndBenefits,
  HowitWorks,
  PrivacyAndSecurity,
} from "../components/about";
const About = () => {
  return (
    <section className="container p-4 scroll-m-12">
      <AboutNav />
      <AboutUs />
      <HowitWorks />
      <FeaturesAndBenefits />
      <PrivacyAndSecurity />
      <Faqs />
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default About;
