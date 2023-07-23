import { useState } from "react";
import Logo from "./Components/Logo/Logo";
import Header from "./Components/Header/Header";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import { calculatePayment } from "./Utils/logic";
import Navigation from "./Components/Navigation/Navigation";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  const [calculationDone, setCalculationDone] = useState(false);
  const [result, setResult] = useState();

  const handleFormSubmission = (form) => {
    const totalPayment = calculatePayment(form);

    setResult({
      ...totalPayment,
    });
    setCalculationDone(true);
  };

  const handleReset = () => {
    setCalculationDone(false);
    setResult(null);
  };

  return (
    <ThemeProvider>
      <Wrapper>
        <Navigation />
        {/* <Logo /> */}
        <Header />
        <Form onSubmmitedForm={handleFormSubmission} onReset={handleReset} />
        {calculationDone && <Result results={result} />}
        <Disclaimer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
