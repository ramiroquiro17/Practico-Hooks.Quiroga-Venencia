import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { TextField, Button, Container, Typography, Box } from '@mui/material';


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
        <Container maxWidth="sm" sx={{
            mt: 4,
            p: 3,
            backgroundColor: '#e8faf6',
            borderRadius: 2,
            boxShadow: 5,
            height: 450,
          }}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h4" gutterBottom>
                Iniciar Sesión
              </Typography>
              {error && (
                <Typography variant="body1" color="error" gutterBottom>
                  {error}
                </Typography>
              )}
              <form onSubmit={handleLogin}>
                <TextField
                  label="usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Contraseña"
                  value={contraseña}
                  type="password"
                  onChange={(e) => setContraseña(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                    Iniciar Sesión
                </Button>
              </form>
            </Box>
        </Container>
    );
};
export default Login;