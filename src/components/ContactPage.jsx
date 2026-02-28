import React, { useState } from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    serviceType: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formSubmitUrl = 'https://formsubmit.co/ajax/info@nsecuritytechsolutions.com'; // Make sure this is verified

    try {
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        setFormData({
          name: '',
          location: '',
          serviceType: '',
          email: '',
          mobile: '',
          message: '',
        });

        // Hide message after 10 seconds
        setTimeout(() => setSubmitted(false), 10000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setSubmitted(false);

      // Hide error message after 10 seconds
      setTimeout(() => setError(false), 10000);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name<span className="required">*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location<span className="required">*</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Service Type<span className="required">*</span>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Service --</option>
            <option value="New-installation">New Installation</option>
            <option value="Site-survey">Site Survey</option>
            <option value="Product-tds-discussion">Product TDS Discussion</option>
            <option value="General-meeting">General Meeting</option>
            <option value="Amc-service">AMC Service</option>
            <option value="Cctv-service">CCTV Service</option>
            <option value="Biometric-software-service">Biometric & Software Service</option>
            <option value="Door-access-control">Door Access Control (EM Lock) Service</option>
            <option value="Networking-it-support">Networking & IT Support</option>
            <option value="Others">Others</option>
          </select>
        </label>

        <label>
          Email ID<span className="required">*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number<span className="required">*</span>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10,15}"
            title="Please enter a valid phone number"
          />
        </label>

        <label>
          Message (Optional)
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <button type="submit" className="submit-button">
          SUBMIT
        </button>

        {/* Success & Error messages below submit button */}
        {submitted && (
          <p className="success-message">✅ Thank you! Your message has been sent.</p>
        )}
        {error && (
          <p className="error-message">❌ Something went wrong. Please try again later.</p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
