
import React, { useState } from 'react';





const UserForm = ({ onCreateUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    country: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = {};


    ['firstName', 'lastName', 'email', 'mobile', 'address1', 'state', 'country', 'zipCode'].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

  
    const mobileRegex = /^\d{10}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
    }

    const zipCodeRegex = /^\d+$/;
    if (formData.zipCode && !zipCodeRegex.test(formData.zipCode)) {
      newErrors.zipCode = 'Zip code must be a number';
    }

    setErrors(newErrors);

  
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      onCreateUser({ ...formData, id: Date.now() });

      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address1: '',
        address2: '',
        state: '',
        country: '',
        zipCode: '',
      });
    } else {
      alert('Please fill in required fields correctly.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        {errors.firstName && <span className="error" style={{ color: 'red' }}>{errors.firstName}</span>}
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        {errors.lastName && <span className="error" style={{ color: 'red' }}>{errors.lastName}</span>}
      </label>

     

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
      </label>

      <label>
        Mobile:
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          placeholder="Enter your mobile number"
          onChange={handleChange}
        />
        {errors.mobile && <span className="error" style={{ color: 'red' }}>{errors.mobile}</span>}
      </label>

      <label>
        Address 1:
        <input
          type="text"
          name="address1"
          value={formData.address1}
          placeholder="Enter your address line 1"
          onChange={handleChange}
        />
        {errors.address1 && <span className="error" style={{ color: 'red' }}>{errors.address1}</span>}
      </label>

      <label>
        Address 2:
        <input
          type="text"
          name="address2"
          value={formData.address2}
          placeholder="Enter your address line 2"
          onChange={handleChange}
        />
        {errors.address2 && <span className="error" style={{ color: 'red' }}>{errors.address2}</span>}
      </label>

      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          placeholder="Enter your state"
          onChange={handleChange}
        />
        {errors.state && <span className="error" style={{ color: 'red' }}>{errors.state}</span>}
      </label>

      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Enter your country"
          onChange={handleChange}
        />
        {errors.country && <span className="error" style={{ color: 'red' }}>{errors.country}</span>}
      </label>

      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          placeholder="Enter your zip code"
          onChange={handleChange}
        />
        {errors.zipCode && <span className="error" style={{ color: 'red' }}>{errors.zipCode}</span>}
      </label>

      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;

