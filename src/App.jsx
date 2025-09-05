import AboutSIH from "./components/AboutSIH";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import PrizesSection from "./components/PrizesSection";
import ProblemCategories from "./components/ProblemCategories";
import RegistrationSection from "./components/RegistrationSection";
import TimelineSection from "./components/TimelineSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <NavigationBar/>
      <HeroSection/>
      <AboutSIH/>
      <TimelineSection/>
      <ProblemCategories/>
      {/* <PrizesSection/> */}
      <RegistrationSection/>
      
      <FAQSection/>
      {/* <FooterSection/> */}
    </div>
  );
}

export default App;
