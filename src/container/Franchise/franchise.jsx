import React, { useState } from 'react';
import './franchise.css';

const Franchise = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = 'Franchise Inquiry';
    const body = `Hello,\n\nMy name is ${name} and I am interested in joining the franchise.\n\nThank you.`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="background-image">
      <div className="content">
        <h4 className='headtext__cormorant1'>Franchise</h4>
        <p>Join our franchise and be a part of our growing family.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Franchise;
