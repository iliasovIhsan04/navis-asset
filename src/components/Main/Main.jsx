import React from "react";
import WalletRecovery from "./WalletRecovery";
import Partners from "./Partners";
import Faq from "./Faq/Faq";
import WhyСhooseTeam from "./WhyСhooseTeam";
import WeWillHelp from "./WeWillHelp";

const Main = () => {
  return (
    <main className="main">
      <WalletRecovery />
      <Partners />
      <WhyСhooseTeam />
      <WeWillHelp />
      <Faq />
    </main>
  );
};

export default Main;
