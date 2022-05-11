import { useParams, useNavigate } from "react-router-dom";
import Main from "./style";
import { useState } from "react";
import axios from "axios";

function Finances() {
    const { type } = useParams();
    const [newEntry, setNewEntry] = useState({
        value: "",
        description: "",
        type: type,
    });

    function writeValue(value) {
        let decimals = value % 1;
        let inteiros = (value - decimals).toString();
        let inteirosLabel = "";
        for (let i = 1; i <= inteiros.length; i++) {
            if ((i-1) % 3 === 0 && i>1) {inteirosLabel = "." + inteirosLabel}
            inteirosLabel = inteiros[inteiros.length - i] + inteirosLabel;
        }
        let dec2 = Math.round(decimals*100)
        return inteirosLabel + "," + (dec2 < 10 ? "0" : "") + dec2;
    }

    const navigate = useNavigate();

    function sendEntry(entry) {
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` } };
        const promise = axios.post("https://projeto-mywallet-api.herokuapp.com/finances", entry, config);
        promise.then((res)=>{
            alert("Cadastro realizado com sucesso");
            navigate("/home");
        });
        promise.catch((err) => {
            Error(err);
            alert("Um erro aconteceu, tente novamente");
            
        });
    }

    function sendInputData(e) {
        e.preventDefault();
        sendEntry(newEntry);
        console.log(newEntry);
        navigate("/home");
    }

    return (
        <Main>
            <h1>Nova {type === "entry" ? "Entrada" : "Saída"}</h1>
            <form onSubmit={(e) => sendInputData(e)}>
                <input className={`${type}`}
                    type="number"
                    placeholder="Valor"
                    value={newEntry.value}
                    onChange={(e) =>
                        setNewEntry({ ...newEntry, value: e.target.value })
                    }
                    required
                />
                <input 
                    type="text"
                    placeholder="Descrição"
                    value={newEntry.description}
                    onChange={(e) =>
                        setNewEntry({
                            ...newEntry,
                            description: e.target.value,
                        })
                    }
                    required
                />
                <button type="submit">Salvar {type === "entry" ? "Entrada" : "Saída"}</button>
            </form>
        </Main>
    );
}



export default Finances;