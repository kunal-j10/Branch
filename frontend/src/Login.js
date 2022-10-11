import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

const Login = ({ setLoggedIn }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let navigate = useNavigate();
  const loginSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", data);
      if (res.data.success) {
        setLoading(false);
        setLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <HashLoader color="#1759A7" />
        </div>
      )}
      <div className="w-[40%] bg-gray-600 h-[50%] border-2 flex flex-col justify-center p-3 rounded-lg">
        <input
          className="p-3 m-3"
          type="email"
          name="email"
          value={data.name}
          onChange={inputHandler}
          placeholder="Enter your email"
        ></input>
        <input
          className="p-3 m-3"
          type="password"
          name="password"
          value={data.password}
          onChange={inputHandler}
          placeholder="Enter your password"
        ></input>
        <button
          className="bg-red-600 text-white px-3 py-2 rounded-lg m-3"
          onClick={loginSubmit}
        >
          Login
        </button>
        <p className="text-center">
          Dont have an account?{" "}
          <Link to="/signup" className="text-white hover:text-red-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
