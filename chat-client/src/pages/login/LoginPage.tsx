import { Button } from "primereact/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername as setUsernameReducer} from "../../store/slices/authSlice";

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setUsernameReducer(username))
    navigate("/home");
  };
  return (
    <div className="card">
      <h2 className="text-3xl mb-7">Login Page</h2>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-3/12 gap-3">
          <input
            className="p-3 rounded"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="p-3 rounded"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            label="Login"
            type="submit"
            icon="pi pi-check"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}
