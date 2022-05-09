import axios from "axios";
import { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import  MainStyle from "./style"; 
import { ThreeDots } from "react-loader-spinner";

import UserContext from "./../../assets/Context";


export default function Login() {
    const {Error} = useContext(UserContext);
    const [user, setUser] = useState({email: "", password: ""
});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function requestAcess(userObj) {
        setLoading(true);
        const promise = axios.post("http://localhost:5000/sign-in", userObj);
        promise.then((res)=>{
            const token = res.data;
            localStorage.setItem("TOKEN", token);
            console.log(token);
            navigate("/home");
        });
        promise.catch((err) => {
            Error(err);
            navigate("/");
            setLoading(false);
            
        });
    }

    function sendInputData(e){
        e.preventDefault();
        requestAcess(user)
    }

    return (
        <MainStyle>
            <h1>MyWallet</h1>
            <form
            onSubmit={(e) => sendInputData(e)}
            >
                <input
                    type="email"
                    placeholder="E-mail"
                    value={user.email}
                    disabled={loading}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    disabled={loading}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    required
                />
                <button type="submit">
                    {loading ? <ThreeDots color="#ffffff" /> : "Entrar"}
                </button>
            </form>

            <Link to="/sign-up">Primeira Vez? Cadastre-se</Link>
        </MainStyle>
    );
}