import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";
import { TextField, Button, Container, Typography, Box } from '@mui/material';

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
            <Container maxWidth="sm" sx={{
            mt: 4,
            p: 3,
            backgroundColor: '#e8faf6',
            borderRadius: 2,
            boxShadow: 5,
            height: 470,
          }}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h4" gutterBottom>
                Registrarse
              </Typography>
              {error && (
                <Typography variant="body1" color="error" gutterBottom>
                  {error}
                </Typography>
              )}
              <form onSubmit={handleRegister}>
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
                  onChange={(e) => setContraseña(e.target.value)}
                  type="password"
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
                    Registrarse
                </Button>
              </form>
            </Box>
        </Container>
    );
};
export default Register;