import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <header className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div>
          <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
          <form className="mt-6">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}
