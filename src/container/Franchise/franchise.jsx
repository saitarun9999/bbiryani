import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './franchise.css';

const Franchise = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: name,
      reply_to: email,
      message_html: `Hello,<br/><br/>My name is ${name} and I am interested in joining the franchise.<br/><br/>Thank you.`
    }, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error('Email error:', error);
        alert('Failed to send email. Please try again later.');
      });

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="background-image" id="franchise">
      <div className="fcontent">
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
