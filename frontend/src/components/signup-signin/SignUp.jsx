import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign up to start managing your tasks
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="your username"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
