import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { authActions } from '../../store/auth.slice';

// Array of username and passwords
const users = [
  { username: 'alice', password: 'alice1' },
  { username: 'bob', password: 'bob1' },
  { username: 'casie', password: 'casie1' },
];

function Auth() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch(authActions.login(username));
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  if (isLoggedIn) {
    return <Navigate to="/blogs" />;
  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 8,
        mt: 4,
        paddingBottom: 3,
        marginBottom: 7.5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </form>
      {error && (
        <Typography color="error" mt={2} align="center">
          {error}
        </Typography>
      )}
      <Typography align="center" mt={2}>
        Don't have an account?{' '}
        <Button color="primary" component={Link} to="/signup">
          Sign up
        </Button>
      </Typography>
    </Box>
  );
}

export default Auth;