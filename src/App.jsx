import AboutSIH from "./components/AboutSIH";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import PrizesSection from "./components/PrizesSection";
import ProblemCategories from "./components/ProblemCategories";
import RegistrationSection from "./components/RegistrationSection";
import TimelineSection from "./components/TimelineSection";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <NavigationBar/>
      <HeroSection/>
      <AboutSIH/>
      <TimelineSection/>
      <ProblemCategories/>
      <PrizesSection/>
      <RegistrationSection/>
      {/* <TeamMatcher /> */}
      <FAQSection/>
      {/* <FooterSection /> */}
    </div>
  );
}

export default App;
