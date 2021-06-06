import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

function App(props) {
  let mainComponent = "";

  switch(props.location){

      case "":
        mainComponent = <Main {...props}/>
        break;
      case "callback":
        mainComponent = <Callback />
        break;  
      case "secret":
        mainComponent = <Secret />
        break;
      default:
        mainComponent = <NotFound />  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {mainComponent}
      </header>
    </div>
  );
}

export default App;
