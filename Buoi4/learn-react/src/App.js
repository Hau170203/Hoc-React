// import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Layout from './components/layout';
import Random from './components/Random';
// import Input from './components/inputRef';

function App() {
  return (
    <>
      <Layout />
      <Random />
      {/* <Input /> */}
      <Count />
    </>
  );
}

export default App;
