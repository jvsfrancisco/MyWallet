import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
    RiLogoutBoxRLine,
    RiAddCircleLine,
    RiIndeterminateCircleLine,
} from "react-icons/ri";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import Main from "./style";
import UserContext from "./../../assets/Context";

export default function Home() {
    const token = localStorage.getItem("TOKEN");
    const { user, setUser } = useContext(UserContext);

    let total = 0;

    const navigate = useNavigate();

    
    if (user.registry) {
        user.registry.forEach((register) => {
            if (register.type === "entry") {
                total += register.value;
            } else if (register.type === "spent") {
                total -= register.value;
            }
        });
    }

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        console.log(token)
        const promise = axios.get("http://localhost:5000/finances", config);
        promise.then((res) => {
            setUser(res.data);
            console.log(user)
        });
        promise.catch((err) => {
            console.log(`${err.response.status} - ${err.response.statusText}`);
            alert("Um erro aconteceu, tente novamente");
            navigate("/");
        });
    }, []);

    return user.name ? (
        <Main color={total > 0 ? "income" : "expense"}>
            <aside>
                <h1>Olá, {user.name}</h1>
                <Link to="/">
                    <RiLogoutBoxRLine />
                </Link>
            </aside>
            {user.registry.length > 0 ? (
                <section>
                    {user.registry.map((register) => {
                        return (
                            <Container
                                class={register.type}
                                color={register.type}
                            >
                                <p>
                                    <span>{register.date}</span>{" "}
                                    {register.description}
                                </p>
                                <p class="value">{register.value}</p>
                            </Container>
                        );
                    })}

                    <p>
                        SALDO <span>{total}</span>
                    </p>
                </section>
            ) : (
                <section class="empty">
                    <p>Não há registros de entrada ou saída</p>
                </section>
            )}

            <div>
                <Link to="/finances/entry">
                    <button>
                        <RiAddCircleLine />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/finances/spent">
                    <button>
                        <RiIndeterminateCircleLine />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </div>
        </Main>
    ) : (
        <> </>
    );
}

const Container = styled.div`
    p span {
        color: var(--ligth-grey);
        margin-right: 5px;
    }
    p.value {
        color: var(--${(props) => props.color});
    }
`;