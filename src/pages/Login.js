import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate authentication process
    if (email && password) {
      onLogin(); // Notify App component to update authentication state
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={4}
        style={{
          padding: 20,
          textAlign: 'center',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          borderRadius: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            Login
          </Typography>
          <form noValidate autoComplete="off" style={{ marginTop: 20 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default Login;
