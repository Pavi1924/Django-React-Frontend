import {useState} from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./Loadingindicator";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Form({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const name = method ==="login" ? "login": "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };
    return (
    <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input 
        
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        />
        <div className="password-container">
            <input 
            className="form-input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="password-toggle-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
        </div>
        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
            {name}
        </button>
        <div>
            {method === "login" ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => navigate(method === "login" ? "/register" : "/login")}>
                {method === "login" ? "Register" : "Login"}
            </span>
        </div>
    </form>
);

}
export default Form
