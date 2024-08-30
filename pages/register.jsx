import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

const Register = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { registrar } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            registrar(usuario, contraseña);
            navigate('/inicio-sesion')
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h3>Registro</h3>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <form onSubmit={handleRegister}>
                <div>
                    <label >Usuario:</label>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
                </div>
                <div>
                    <label >Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required/>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};
export default Register;