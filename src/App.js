import './App.css';
import Router from './Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
body{
  ${reset}
  font-size: 62.5%;
  box-sizing: border-box;
}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
