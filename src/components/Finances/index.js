import { useParams, useNavigate } from "react-router-dom";
import Main from "./style";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function Finances() {
    const { type } = useParams();
    const [newEntry, setNewEntry] = useState({
        value: "",
        description: "",
        type: type,
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendEntry(entry) {
        if(entry.value.includes(",")) entry.value = entry.value.replace(",", ".");
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` } };
        const promise = axios.post("https://mywallet-api.fly.dev/finances", entry, config);
        promise.then((res)=>{
            navigate("/home");
            console.log(res.data);
            setLoading(false);
        });
        promise.catch((err) => {
            alert("Um erro aconteceu, tente novamente");
            setLoading(false);
        });
    }

    function sendInputData(e) {
        e.preventDefault();
        sendEntry(newEntry);
        console.log(newEntry);
    }

    return (
        <Main>
            <div>
                <h1>Nova {type === "entry" ? "Entrada" : "Saída"}</h1>
                <form onSubmit={(e) => sendInputData(e)}>
                    <input className={`${type}`}
                        type="tel"
                        placeholder="Digite o valor exemplo: 50,00"
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
                    <button type="submit" disabled={loading}>{loading ? <ThreeDots color="#ffffff" width={50} /> : `Salvar ${type === "entry" ? "Entrada" : "Saída"}`}</button>
                    <button disabled={loading} onClick={() => navigate("/home")}> Cancelar </button>
                </form>
            </div>
        </Main>
    );
}



export default Finances;
