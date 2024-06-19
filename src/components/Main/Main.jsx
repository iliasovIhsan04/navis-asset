import React from "react";
import WalletRecovery from "./WalletRecovery";
import Partners from "./Partners";
import Faq from "./Faq/Faq";
import WhyСhooseTeam from "./WhyСhooseTeam";
import WeWillHelp from "./WeWillHelp";
import ReturnTheMoney from "./ReturnTheMoney";
import News from "./News";
import Footer from "../Footer";

const Main = () => {
  return (
    <main className="main">
      <WalletRecovery />
      <Partners />
      <WhyСhooseTeam />
      <WeWillHelp />
      <Faq />
      <News />
      <ReturnTheMoney />
      <Footer />
    </main>
  );
};

export default Main;
