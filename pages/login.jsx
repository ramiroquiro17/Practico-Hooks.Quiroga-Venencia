import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login= () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { iniciarSesion } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            iniciarSesion(usuario, contraseña);
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h3>Iniciar Sesión</h3>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label >Usuario:</label>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
                </div>
                <div>
                    <label >Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required/>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};
export default Login;