import Heading from "./components/heading/Sort_heading.js";
import "./App.css"
import InputSection from "./components/Input_section/Input_buttons.js";
import Visualize from "./components/Visualize_array/Visualize.js";
let arr=[1,2,3];
function App() {
  return (
    <section className="app-section">
    <Heading/>
    <InputSection/>
    arr.foreach(()=>{
      <Visualize/>
    })
    
    </section>

  );
}

export default App;
