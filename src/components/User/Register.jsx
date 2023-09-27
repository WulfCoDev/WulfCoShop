import { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: parseInt(formData.number, 10),
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };

    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(userObj),
    });

    const json = await response.json();
    console.log(json);

    setIsRegistered(true);
  };

  return (
    <div className="register-container">
        {isRegistered ? (
        <div className="success-message">Successfully Registered!</div>
      ) : (
      <form onSubmit={handleSubmit}>
        <h2>Create login details</h2>
        
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <h2>Enter shipping address</h2>
        <input type="text" name="email" placeholder="Email" onChange={handleChange} />
        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} />
        <input type="text" name="number" placeholder="Address Number" onChange={handleChange} />
        <input type="text" name="street" placeholder="Street" onChange={handleChange} />
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input type="text" name="zipcode" placeholder="Zip Code" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      )}
    </div>
  );
};

export default Register;