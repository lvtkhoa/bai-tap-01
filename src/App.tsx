import "./App.css";


import Title from "./components/Title";
import InputSearch from "./containers/InputSearch";
import Footer from "./containers/Footer";
import ItemList from "./containers/ItemList";
import { dataTodolist } from "./dataTodoList";



function App() {
  return (
     <div className="todo">
      <Title>Todo-app</Title>
      <InputSearch></InputSearch>
      <ItemList data = {dataTodolist}></ItemList>
      <Footer></Footer>
    </div>
    
  );
}

export default App;



