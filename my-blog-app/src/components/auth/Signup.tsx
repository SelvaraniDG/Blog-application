import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);


  const validateEmail = (email:string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (!email || !username || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSignedUp(true);
  };

  if (signedUp) {
    return <Navigate to="/blogs" />;
  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 8,
        mt: 2.5,
        marginBottom: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      {error && (
        <Typography color="error" mt={2} align="center">
          {error}
        </Typography>
      )}
      <Typography align="center" mt={2}>
        Already have an account?{' '}
        <Button color="primary" component={Link} to="/auth">
          Login
        </Button>
      </Typography>
    </Box>
  );
}

export default Signup;