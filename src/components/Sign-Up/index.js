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
        confirm: "",
    });
    const navigate = useNavigate();

    function register(registerUser) {
        setLoading(true);
        if (registerUser.password !== registerUser.confirm) {
            alert("Senhas diferentes!");
            setregisterUser({ ...registerUser, password: "", confirm: "" });
            return;
        }
        delete registerUser.confirm;
        const promise = axios.post("https://mywallet-api.fly.dev/sign-up", registerUser);
        promise.then(() => {
            navigate("/");
        });
        promise.catch((err) => {
            if(err.response.status === 409){
                alert("E-mail já cadastrado!");
                setLoading(false)
            }
            else{
                Error(err);
                setLoading(false)
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
                    disabled = {loading}
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
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={registerUser.confirm}
                    disabled = {loading}
                    onChange={(e) =>{
                        setregisterUser({ ...registerUser, confirm: e.target.value })
                    }
                }
                    required
                />
                <button type="submit">{loading ? <ThreeDots color="#ffffff" width={50} /> : "Cadastrar"}</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </MainStyle>
    );
}
