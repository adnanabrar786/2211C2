import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contactus = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      age: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .required('Age is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Formik Input Example</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Age Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.touched.age && formik.errors.age ? (
            <div style={{ color: 'red' }}>{formik.errors.age}</div>
          ) : null}
        </div>

        {/* Buttons */}
        <button type="submit" style={{ marginRight: '10px' }}>
          Submit
        </button>
        <button type="reset" onClick={formik.handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Contactus;
