import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ViewTable from "./pages/ViewTable";
import EditPage from "./pages/EditPage";
import Login from "./pages/Login";
// Login
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/ViewData" element={<ViewTable />} />
        <Route path="/edit-student/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
