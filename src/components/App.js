import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import GlobalStyle from "./../assets/globalStyle";
import UserContext from "./../assets/Context";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./Sign-Up";
import Finances from "./Finances";


function App() {
  const [user, setUser] = useState({});

  function Error(e) {
    console.log(`${e.response.status} - ${e.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
            Error,
            user,
            setUser,
      }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path ="/Sign-Up" element ={<SignUp />} />
            <Route path ="/Home" element ={<Home />} />
            <Route path="/Finances/:type" element={<Finances />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;