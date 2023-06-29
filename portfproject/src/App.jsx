import { Routes, Route } from "react-router-dom";
import RegPage from "./components/regPage/RegPage";
import { useState } from "react";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/projects/Projects";
import HousePage from "./components/housePage/HousePage";
import GptProject from "./components/gptProject/GptProject";
import TodoList from "./components/TODOlist/TodoList";
function App() {
  console.log(document.cookie.split('=')[1]);
  const [userName, setuserName] = useState(document.cookie.split('=')[1]);
  return (
    <>
    {userName?<NavBar/>:null}
    <Routes>
      <Route path="/reg" element={<RegPage setuserName= {setuserName}/>}/>
      <Route path="/" element={<MainPage userName={userName}/>}/>
      <Route path="/proj"  element={<Projects/>}/>
      <Route path="/home" element={<HousePage/>}/>
      <Route path="/gpt" element={<GptProject/>}/>
      <Route path="/todolist" element={<TodoList/>}/>
    </Routes>
    </>
  );
}

export default App;
