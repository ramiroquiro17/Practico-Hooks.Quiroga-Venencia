import React,{createContext, useState, useContext, useEffect} from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext (AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const usuarioSesion = sessionStorage.getItem('usuarioSesion');
        if (usuarioSesion) {
            setUser(JSON.parse(usuarioSesion));
            setIsAuthenticated(true);
        }
    }, []);

    const registrar = (usuario, contraseña) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExiste = usuarios.find(u => u.usuario === usuario);

        if (usuarioExiste) {
            throw new Error ('El usuario ya existe');
        }

        const nuevoUsuario = {usuario ,contraseña};
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    };
    
    const iniciarSesion = (usuario, contraseña) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find (u => u.usuario === usuario && u.contraseña === contraseña);

        if (!usuarioEncontrado) {
            throw new Error('Credenciales invalidas');
        }

        sessionStorage.setItem('usuarioSesion',JSON.stringify(usuarioEncontrado));
        setUser(usuarioEncontrado);
        setIsAuthenticated(true);
    };

    const cerrarSesion = () => {
        sessionStorage.removeItem('usuarioSesion');
        setUser(null);
        setIsAuthenticated(false);
        window.location.replace('/')
    };

    return (
        <AuthContext.Provider value= {{isAuthenticated, user, registrar, iniciarSesion, cerrarSesion}}>
            {children}
        </AuthContext.Provider>
    )
    
}