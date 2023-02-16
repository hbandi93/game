import { useState } from "react";
import { postRegistration } from "./api/api";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const usernameSetter = (event) => {
        setUsername(event.target.value);
    }
    const passwordSetter = (event) => {
        setPassword(event.target.value);
    }
    const emailSetter = (event) => {
        setEmail(event.target.value);
    }

    const performRegistration = () => {
        postRegistration({ email, username, password })
    }

    return <div>
        <div>Felhasználónév: <input type="text" value={username} onChange={usernameSetter} />
        </div>
        <div>Jelszó:  <input type="password" value={password} onChange={passwordSetter} />
        </div>
        <div>E-mail: <input type="email" value={email} onChange={emailSetter} />
        </div>
        <button type="submit" onClick={performRegistration}>Mentés</button>

    </div>

}

export default Form;