'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement actual password reset logic
    console.log('Password reset requested for:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="input-group">
        <span className="input-icon">
          <Icon name="message" size={20} />
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

      <button type="submit" className="btn-login">Send Reset Link</button>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Link href="/login" className="muted" style={{ fontSize: '14px' }}>Back to Login</Link>
      </div>
    </form>
  );
}