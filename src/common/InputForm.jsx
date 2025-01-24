import { useState } from 'react';
import '../styles/InputForm.css';

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    communication: 'call',
    rooms: '',
    service: 'residential',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for backend API call
    alert(
      `Thank you ${formData.name}! We have received your message and will be reaching out shortly.`
    );

    // Example: Integrate a backend service like Twilio or an SMS API
    // fetch('/api/send-text', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     phone: formData.phone,
    //     message: `Thank you ${formData.name}! We received your message and will be reaching out shortly regarding your ${formData.service} service.`,
    //   }),
    // });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      communication: 'call',
      rooms: '',
      service: 'residential',
      message: '',
    });
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <h2>Get In Touch</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rooms">Number of Rooms</label>
        <input
          type="number"
          id="rooms"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          placeholder="Enter number of rooms"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">What Service Are You Looking For?</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="rental">Vacation Rental Cleaning</option>
          <option value="moving">Move In/Out Cleaning</option>
          <option value="deepclean">Deep Cleaning</option>
          <option value="routine">Routine Cleaning</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default InputForm;
