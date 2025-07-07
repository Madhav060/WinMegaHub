import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  // Debug logging
  console.log('Login component render - user:', user);

  // Redirect if already logged in - using Navigate component instead of useEffect
  if (user) {
    console.log('User exists, navigating to profile');
    return <Navigate to="/profile" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ 
          message: 'Login failed. Please check your credentials.' 
        }));
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await res.json();
      console.log('Login successful, received data:', data);
      console.log('Setting user to:', data.user);
      setUser(data.user);

    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <Card className="w-100" style={{ maxWidth: '500px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div 
          className="text-white text-center py-4" 
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem'
          }}
        >
          <h2>Welcome Back</h2>
          <p className="mb-0">Sign in to your account</p>
        </div>
        
        <Card.Body className="p-4 p-md-5">
          {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="py-3"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="py-3"
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-3 text-white fw-bold"
              disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                letterSpacing: '0.5px'
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>

            <div className="text-center mt-4">
              <p className="text-muted">
                Don't have an account?{' '}
                <a href="/register" style={{ color: '#667eea', textDecoration: 'none' }}>
                  Sign up
                </a>
              </p>
              <a 
                href="/forgot-password" 
                className="text-muted"
                style={{ textDecoration: 'none' }}
              >
                Forgot password?
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;