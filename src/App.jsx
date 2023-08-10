import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import { calculatePayment } from "./Utils/logic";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  const [calculationDone, setCalculationDone] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    const preloaderEl = document.querySelector(".preloader-container");
    preloaderEl.classList.add("hidden");
    setTimeout(() => {
      preloaderEl.remove();
    }, 2000);
  }, []);

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
    <Wrapper>
      <Navigation />
      <Header />
      <Form onSubmmitedForm={handleFormSubmission} onReset={handleReset} />
      {calculationDone && <Result results={result} />}
      <Disclaimer />
    </Wrapper>
  );
};

export default App;
