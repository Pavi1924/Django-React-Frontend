import React, { useState } from "react";
import Form from "../components/Form";
import PasswordInput from "../components/PasswordInput"; 

function Login() {
  const [password, setPassword] = useState(""); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  return (
    <Form route="https://django-react-mumx.onrender.com/api/token/" method="login">
      <div>
        <label>Password</label>
        <PasswordInput value={password} onChange={handlePasswordChange} /> {/* Use PasswordInput here */}
      </div>
    </Form>
  );
}

export default Login;
