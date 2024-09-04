import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  

  const handleLogin = async (e) => {
    e.preventDefault();

     try {
        const response = await axios.post('http://localhost:3000/login', 
            { email, password }, 
            {
            headers: {
                'Content-Type': 'application/json', 
                }
            }
            
        );
        setUser(response.data)
    }catch(error) {
        if(!error?.response) {
            setError('Error ao acessar o servidor')
        } else if(error.response.status == 401){
            setError("Usuario ou senha inválidos")
        }
    }  
    }

    const handleLogout = async () => {
        setUser(null)
    }

  return (
    <div>
        {user == null ? (
            <div>
                  <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
      <form className="mt-6" onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
      <p className='text-red-600 m-2'>{error}</p>
            </div>
        ): (
            <div> 
                <h2>Olá, {user.name}</h2>
                <button type='button'
                className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                onClick={(e) => handleLogout(e)}
                >
                    Sair
                </button>
            </div>
        )}
    </div>
  );
};

export default Login;
