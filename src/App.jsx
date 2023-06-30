import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Wrapper from "./Components/UI/Wrapper";
import Form from "./Components/Form";

const App = () => {
  return (
    <Wrapper>
      <Logo />
      <Header />
      <Form onCalculatedPayment={1} />
    </Wrapper>
  );
};

export default App;
