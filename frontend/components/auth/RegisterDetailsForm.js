'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/Icon';

export default function RegisterDetailsForm() {
  const router = useRouter();
  const [details, setDetails] = useState({ name: '', age: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting final profile details:', details);
    // TODO: Perform actual API call to complete registration
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="input-group">
        <span className="input-icon">
          <Icon name="user" size={20} />
        </span>
        <input
          type="text"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) => setDetails({...details, name: e.target.value})}
          required
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <span className="input-icon">
          <Icon name="calendar" size={20} />
        </span>
        <input
          type="number"
          placeholder="Age"
          value={details.age}
          onChange={(e) => setDetails({...details, age: e.target.value})}
          required
          className="auth-input"
        />
      </div>

      <button type="submit" className="btn-login">Complete Registration</button>
    </form>
  );
}