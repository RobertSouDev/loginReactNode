import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TelaRegister from "./pages/TelaRegister";

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<TelaRegister/>} />
        </Routes>
    </BrowserRouter>
  )
}