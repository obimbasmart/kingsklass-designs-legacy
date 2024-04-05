// import About from "../components/home/About"
import { ContactUs } from "./components/ContactUs.tsx";
import { Hero } from "./components/Hero.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Testimonials from "./components/Testimonials.tsx";
import HowCanWeHelp from "./components/HowCanWeHelp.tsx";
import WhyCustomTailoring from "./components/WhyCustomTailoring.tsx";
import Promotions from "./components/Promotions.tsx";

export const Home = () => {

  return (
    <main className="border-black items-center w-full flex flex-col mt-16">
      <Hero />

      <HowCanWeHelp />
      <HowItWorks />
      <Promotions />
      <WhyCustomTailoring />
      <Testimonials />
      <ContactUs />
    </main>
  );
};
