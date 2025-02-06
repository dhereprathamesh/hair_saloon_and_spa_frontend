import React from "react";
import "../assets/styles/signUp.css";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };
  return (
    <div id="webcrumbs">
      <div className="w-[1440px] font-sans">
        <div className="flex items-center justify-center min-h-[600px] bg-gray-50">
          <div className="w-[400px] p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Create Account
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" type="text" placeholder="John" />
                <Input label="Last Name" type="text" placeholder="Doe" />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </div>
              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Create Account
              </button>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fa-brands fa-google text-xl" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fa-brands fa-facebook text-xl" />
                  Facebook
                </button>
              </div>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-black hover:underline"
                  onClick={handleSignIn}
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="absolute bottom-6 right-6">
          <button className="p-4 bg-black text-white rounded-full hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
