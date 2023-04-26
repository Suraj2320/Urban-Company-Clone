import { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Input, Select, Text, useToast } from "@chakra-ui/react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agreed: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }

    if (!formData.gender) {
      errors.gender = "Gender is required.";
    }

    if (!formData.dob) {
      errors.dob = "Date of birth is required.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/\d/.test(formData.password)) {
      errors.password = "Password must contain at least one number.";
    } else if (!/[^A-Za-z0-9\s]/.test(formData.password)) {
      errors.password = "Password must contain at least one special character.";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.agreed) {
      errors.agreed = "You must agree to the terms and conditions.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log(formData);
      const toast = useToast();
      toast({
        title: "Registration successful.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius={4} maxWidth={400} margin="0 auto">
      <form onSubmit={handleSubmit}>
        <FormControl mb={3} isInvalid={errors.firstName}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          <FormErrorMessage>{errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl mb={3} isInvalid={errors.lastName}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          <FormErrorMessage>{errors.lastName}</FormErrorMessage>
        </FormControl>
        <FormControl mb={3} isInvalid={errors.middleName}>
          <FormLabel htmlFor="middleName">Middle Name</FormLabel>
          <Input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={
                  handleChange} />
      <FormErrorMessage>{errors.middleName}</FormErrorMessage>
    </FormControl>
    <FormControl mb={3} isInvalid={errors.gender}>
      <FormLabel htmlFor="gender">Gender</FormLabel>
      <Select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      <FormErrorMessage>{errors.gender}</FormErrorMessage>
    </FormControl>
    <FormControl mb={3} isInvalid={errors.dob}>
      <FormLabel htmlFor="dob">Date of Birth</FormLabel>
      <Input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
      <FormErrorMessage>{errors.dob}</FormErrorMessage>
    </FormControl>
    <FormControl mb={3} isInvalid={errors.password}>
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      <FormErrorMessage>{errors.password}</FormErrorMessage>
    </FormControl>
    <FormControl mb={3} isInvalid={errors.confirmPassword}>
      <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
      <Input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
    </FormControl>
    <FormControl mb={3} isInvalid={errors.agreed}>
      <Checkbox id="agreed" name="agreed" isChecked={formData.agreed} onChange={handleCheckboxChange}>
        I agree to the terms and conditions
      </Checkbox>
      <FormErrorMessage>{errors.agreed}</FormErrorMessage>
    </FormControl>
    <Button type="submit" colorScheme="blue" mt={4} disabled={!formData.agreed}>
      Register
    </Button>
  </form>
</Box>

            
