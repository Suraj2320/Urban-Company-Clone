import "./App.css";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/,
      'Password must be at least 8 characters long and contain at least one uppercase letter and one special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  agreeTerms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const RegistrationForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name*</label>
      <input type="text" name="firstName" ref={register} />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <label htmlFor="lastName">Last Name*</label>
      <input type="text" name="lastName" ref={register} />
      {errors.lastName && <span>{errors.lastName.message}</span>}

      <label htmlFor="middleName">Middle Name</label>
      <input type="text" name="middleName" ref={register} />

      <label htmlFor="gender">Gender*</label>
      <select name="gender" ref={register}>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <span>{errors.gender.message}</span>}

      <label htmlFor="dateOfBirth">Date of Birth*</label>
      <input type="date" name="dateOfBirth" ref={register} />
      {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}

      <label htmlFor="password">Password*</label>
      <input type="password" name="password" ref={register} />
      {errors.password && <span>{errors.password.message}</span>}

      <label htmlFor="confirmPassword">Confirm Password*</label>
      <input type="password" name="confirmPassword" ref={register} />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      <label htmlFor="agreeTerms">
        <input type="checkbox" name="agreeTerms" ref={register} /> I agree to the terms and conditions*
      </label>
      {errors.agreeTerms && <span>{errors.agreeTerms.message}</span>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
