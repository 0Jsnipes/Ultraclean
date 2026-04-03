import { useState } from 'react';
import axios from 'axios';
import { serviceOptions } from '../content/siteContent';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  rooms: '',
  service: serviceOptions[0],
  message: '',
};

const InputForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({
      type: 'loading',
      message: 'Sending your request...',
    });

    try {
      await axios.post('/send-email', formData);
      setFormData(initialFormData);
      setStatus({
        type: 'success',
        message: 'Your request was sent. We will follow up soon.',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'The request could not be sent. Please try again or call us directly.',
      });
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form__header">
        <p className="section-kicker">Quote form</p>
        <h2>Request cleaning service</h2>
        <p>
          A few details are enough to get started. If you are not sure which service fits,
          describe the space and we can help narrow it down.
        </p>
      </div>

      <div className="quote-form__grid">
        <label className="form-field">
          <span>Name</span>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
        </label>

        <label className="form-field">
          <span>Email</span>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            required
            type="email"
            value={formData.email}
          />
        </label>

        <label className="form-field">
          <span>Phone</span>
          <input
            id="phone"
            name="phone"
            onChange={handleChange}
            placeholder="Best number to reach you"
            required
            type="tel"
            value={formData.phone}
          />
        </label>

        <label className="form-field">
          <span>Service</span>
          <select id="service" name="service" onChange={handleChange} value={formData.service}>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field form-field--full">
          <span>Approximate rooms or size</span>
          <input
            id="rooms"
            name="rooms"
            onChange={handleChange}
            placeholder="For example: 3 bedrooms, small office, or 1 bath apartment"
            type="text"
            value={formData.rooms}
          />
        </label>

        <label className="form-field form-field--full">
          <span>Message</span>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Tell us about the space, your preferred timing, and any rooms you want us to focus on."
            rows="6"
            value={formData.message}
          />
        </label>
      </div>

      <div className="quote-form__footer">
        <button
          className="button button--primary submit-button"
          disabled={status.type === 'loading'}
          type="submit"
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Request'}
        </button>

        {status.type !== 'idle' && (
          <p className={`form-status form-status--${status.type}`} role="status">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default InputForm;
