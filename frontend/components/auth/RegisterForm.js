'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.acceptedTerms) {
      alert("You must accept the terms and conditions");
      return;
    }

    // In a real app, you might save this state to a context or push to a state management tool.
    // For now, we simulate navigation to the next step.
    console.log('Credentials valid, navigating to profile details:', formData.email);
    router.push('/register/details');
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
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
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
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
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
          placeholder="Re-enter Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
          className="auth-input"
        />
      </div>

      <label className="row" style={{ gap: '10px', fontSize: '14px', cursor: 'pointer', color: 'var(--muted)' }}>
        <input
          type="checkbox"
          checked={formData.acceptedTerms}
          onChange={(e) => setFormData({...formData, acceptedTerms: e.target.checked})}
          required
        />
        I accept the terms and conditions
      </label>

      <button type="submit" className="btn-login">Continue</button>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Link href="/login" className="muted" style={{ fontSize: '14px' }}>Already have an account? Login</Link>
      </div>
    </form>
  );
}