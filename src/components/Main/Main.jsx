import React from "react";
import WalletRecovery from "./WalletRecovery";
import Partners from "./Partners";
import Faq from "./Faq/Faq";
import WhyСhooseTeam from "./WhyСhooseTeam";

const Main = () => {
  return (
    <main className="main">
      <WalletRecovery />
      <Partners />
      <WhyСhooseTeam />
      <Faq />
    </main>
  );
};

export default Main;
