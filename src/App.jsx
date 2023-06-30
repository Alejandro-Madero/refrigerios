import { useState } from "react";
import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/Form";
import Result from "./Components/Result";
import Button from "./Components/UI/Button";
import Disclaimer from "./Components/Disclaimer";
import { calculatePayment } from "./Utils/logic";

const App = () => {
  const [calculationDone, setCalculationDone] = useState(false);
  const [result, setResult] = useState();
  const handleFormSubmission = (form) => {
    console.log(form);

    const totalPayment = calculatePayment(form);
    console.log(totalPayment);
    console.log(form);
    setResult({
      money: totalPayment,
      month: form.month,
      paymentMonth: form.paymentMonth,
    });
    setCalculationDone(true);
  };

  const handleReset = () => {
    setCalculationDone(false);
    setResult(null);
  };

  return (
    <Wrapper>
      <Logo />
      <Header />
      <Form onSubmmitedForm={handleFormSubmission} onReset={handleReset} />
      {calculationDone && (
        <Result
          money={result.money}
          month={result.month}
          paymentMonth={result.paymentMonth}
        />
      )}
      <Disclaimer />
    </Wrapper>
  );
};

export default App;
