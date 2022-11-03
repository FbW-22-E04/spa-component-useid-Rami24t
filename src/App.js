import "./App.css";
import InputForm from "./InputForm"

function App() {
  return (
    <div className="App">
        <InputForm label='First Name' />
        <InputForm label='Last Name' />
        <InputForm label='Email' type='email'/>
    </div>
  );
}

export default App;
