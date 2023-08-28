import { useState } from 'react';
import usePreloader from './hooks/usePrealoder';
import Header from './Components/Header/Header';
import Wrapper from './Components/UI/Wrapper';
import Form from './Components/Form/Form';
import Result from './Components/Result/Result';
import Footer from './Components/Footer/Footer';
import { calculatePayment } from './Utils/logic';
import Navigation from './Components/Navigation/Navigation';
import PaymentValues from './Components/PaymentValues/PaymentValues';

const App = () => {
  const [calculationDone, setCalculationDone] = useState(false);
  const [result, setResult] = useState();

  usePreloader();

  const handleFormSubmission = form => {
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
      <PaymentValues />
      <Footer />
    </Wrapper>
  );
};

export default App;
