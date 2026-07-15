'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Icon from '@/components/Icon';

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      login(userData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="input-group">
        <span className="input-icon">
          <Icon name="user" size={20} />
        </span>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <span className="input-icon">
          <Icon name="more" size={20} />
        </span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
      </div>

      <button type="submit" className="btn-login">Login</button>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Link href="/register" className="muted" style={{ fontSize: '14px' }}>Create an account</Link>
        <Link href="/forgot-password" className="muted" style={{ fontSize: '14px' }}>Forgot password?</Link>
      </div>
    </form>
  );
}
