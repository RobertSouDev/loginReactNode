import React from 'react';
import Login from './components/Login';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <header className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

        <Login/>
     </header>

    </div>
  );
}
