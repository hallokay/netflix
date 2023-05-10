import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Layout, Netflix} from './pages/index'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Netflix/>}>
      </Route>
    </Routes>
  );
}

export default App;
