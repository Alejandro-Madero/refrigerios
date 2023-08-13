import { useState } from "react";
import usePreloader from "./hooks/usePreloader";
import Header from "./Components/Header/Header";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Footer from "./Components/Footer/Footer";
import { calculatePayment } from "./utils/logic";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  const [calculationDone, setCalculationDone] = useState(false);
  const [result, setResult] = useState();

  usePreloader();

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
      <Footer />
    </Wrapper>
  );
};

export default App;
