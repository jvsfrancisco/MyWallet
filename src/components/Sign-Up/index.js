import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import  MainStyle from "./style";

import UserContext from "./../../assets/Context";

export default function SignUp() {
    const {Error} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [registerUser, setregisterUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    function register(registerUser) {
        setLoading(true);
        if (registerUser.password !== registerUser.confirmPassword) {
            alert("Senhas diferentes!");
            setregisterUser({ ...registerUser, password: "", confirmPassword: "" });
            return;
        }
        delete registerUser.confirmPassword;
        const promise = axios.post("http://localhost:5000/sign-up", registerUser);
        promise.then(() => {
            navigate("/");
        });
        promise.catch((err) => {
            if(err.response.status === 409){
                alert("E-mail já cadastrado!");
            }
            else{
                Error(err);
            }
        });
    }

    function sendUser(e) {
        e.preventDefault();
        register(registerUser);
    }

    return (
        <MainStyle>
            <h1>MyWallet</h1>
            <form
                onSubmit={(e) => {
                    sendUser(e);
                }}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    value={registerUser.name}
                    onChange={(e) => setregisterUser({ ...registerUser, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={registerUser.email}
                    disabled = {loading}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={registerUser.password}
                    disabled = {loading}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, password: e.target.value })
                    }
                    required
                />
                <input className= {registerUser.password === registerUser.confirm  ? "Correct" : "Incorrect"}
                    type="password"
                    placeholder="Confirme a senha"
                    value={registerUser.confirmPassword}
                    disabled = {loading}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, confirmPassword: e.target.value })
                    }
                    required
                />
                <button type="submit">{loading ? <ThreeDots color="#ffffff" /> : "Cadastrar"}</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </MainStyle>
    );
}