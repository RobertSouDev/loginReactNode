import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', 
        { name, email, password }, 
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      setMessage('Usuário cadastrado com sucesso!');
      setError('');
      setName('');
      setEmail('');
      setPassword('');
      
      setIsRegistered(true);

    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 400) {
        setError(error.response.data.msg || 'Erro no cadastro');
      }
      setMessage('');
      setIsRegistered(false);
    }
  };

  if (isRegistered) {
    window.location.href = '/'; 
  }

  return (
    <div className='flex justify-center w-full max-w-md bg-white rounded-lg shadow-md p-8 flex-col'>
        <h2 className="text-2xl font-semibold text-center text-gray-800">Cadastro</h2>

        <form onSubmit={handleRegister}>
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={name}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-6">
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={password}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
            Cadastrar
            </button>
        </form>
        <div className='mt-3'>
        <Link to="/"><IoArrowBack /></Link>

        </div>

        {error && <p className='text-red-600 m-2'>{error}</p>}
        {message && <p className='text-green-600 m-2'>{message}</p>}
    </div>
  );
};

export default Register;
