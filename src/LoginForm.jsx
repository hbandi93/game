import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const usernameSetter = (event) => {
        setUsername(event.target.value);
    }
    const passwordSetter = (event) => {
        setPassword(event.target.value);
    }
    // Ha van username/pw -> local storage isLoggedIn = true
    const performLogin = () => {
        if (username && password) {
            localStorage.setItem("isLoggedIn", true);
            navigate("/game");
        }
    }

    return <div>
        <div>Felhasználónév: <input type="text" value={username} onChange={usernameSetter} />
        </div>
        <div>Jelszó:  <input type="password" value={password} onChange={passwordSetter} />
            <button type="submit" onClick={performLogin}>Belépés</button>
        </div>
    </div>

}

export default LoginForm;