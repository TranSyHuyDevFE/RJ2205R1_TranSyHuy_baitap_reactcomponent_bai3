import logo from "./logo.svg";
import "./App.css";
import StudentInfoComponent from "./components/StudentInfoComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StudentInfoComponent />
      </header>
    </div>
  );
}

export default App;
