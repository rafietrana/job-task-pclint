import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

 
 

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);





  console.log('alhamdulillah user from singup component', user);
  

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (password === confirmPassword) {
      createUser(email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log("User created successfully:", user);
           alert('alhamdulillah sucessfully created user')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", errorCode, errorMessage);
          alert("i found error in your information please try again")
        });
    } else {
      console.error("Passwords do not match!");
    }

 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="bg-white p-8 rounded-lg shadow-lg border border-red-500"
        style={{ borderImage: "linear-gradient(to right, #ff4e50, #f9d423) 1" }}
      >
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSignUpBtn}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
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
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
