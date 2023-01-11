//import logo from './logo.svg';
import Home from './compo/Home';
import Settings from './compo/Settings';
import Search from './compo/search';
// import createNewComponent from './compo/createNewComponent';
// import colorComponent from './compo/colorComponent';
// import cosmaticComponent from './compo/cosmaticComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <createNewComponent/>
      <colorComponent/>
      <cosmaticComponent/> */}
      <Search/>
      <Settings/>
      <Home/>
    </div>
  );
}

export default App;
