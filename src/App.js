import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Todo from './Components/Todo';
import Color from './Components/Color'; 
import Temp from './Components/Temp';

function App() {
  return (
<>
    <Navbar/>

    <p class="text-center my-3 fs-2"><strong>SIMPLE FORM</strong></p>

    <Form />

    <p class="text-center my-3 fs-2"><strong>TO-DO LIST</strong></p>

    <Todo />

    <p class="text-center my-3 fs-2"><strong>COLOR CHANGE</strong></p>

    <Color />

    <p class="text-center my-3 fs-2"><strong>TempControl</strong></p>

    <Temp />


    
</>
   

  );
}

export default App;
