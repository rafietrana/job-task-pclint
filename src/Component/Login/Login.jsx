import { useContext } from "react";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signInWithGoogle, loginUser } = useContext(AuthContext);

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email);
    console.log("Password:", password);

    loginUser(email, password).then((loginCredential) => {
      const user = loginCredential.user;
      console.log("User created successfully:", user);
      alert("alhamdulillah sucessfully logedin user");
    });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        console.log("Signed in with Google:", user);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="bg-white p-8 rounded-lg shadow-lg border border-red-500"
        style={{ borderImage: "linear-gradient(to right, #ff4e50, #f9d423) 1" }}
      >
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleLoginBtn}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
