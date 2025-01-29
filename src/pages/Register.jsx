import React, { useState } from "react";
import Form from "../components/Form";
import PasswordInput from "../components/PasswordInput"; 

function Register() {
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value); 
  };

  return (
    <Form route="https://django-react-mumx.onrender.com/api/user/register/" method="register">
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email" // Name for the email field
          style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
        />
      </div>

      <div>
        <label>Password</label>
        <PasswordInput value={password} onChange={handlePasswordChange} /> {/* Use PasswordInput for password */}
      </div>

      <div>
        <label>Confirm Password</label>
        <PasswordInput value={confirmPassword} onChange={handleConfirmPasswordChange} /> {/* Use PasswordInput for confirm password */}
      </div>

      <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#007bff", color: "white" }}>
        Register
      </button>
    </Form>
  );
}

export default Register;
