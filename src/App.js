import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from '././components/Home/Home.js';
import './App.css';
import Project from "./components/Project/Project.js";
import Skill from "./Skills/Skill.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  }
  ,
  {
    path: "/skill",
    element: <Skill />
  }
  ,

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
