import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./Sign-Up";
import GlobalStyle from "./../assets/globalStyle/";
import UserContext from "./../assets/Context";

function App() {

  function Error(e, navigate) {
    console.log(`${e.response.status} - ${e.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
            Error
      }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path ="/Sign-Up" element ={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;