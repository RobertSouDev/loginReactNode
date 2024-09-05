import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Defina o hook useNavigate

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

      // Limpar os campos
      setName('');
      setEmail('');
      setPassword('');

      // Redirecionar para a tela de login após o cadastro
      setTimeout(() => {
        navigate('/login'); // Aqui você redireciona o usuário para a tela de login
      }, 1500); // Espera 1.5 segundos para mostrar a mensagem antes de redirecionar

    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 400) {
        setError(error.response.data.msg || 'Erro no cadastro');
      }
      setMessage('');
    }
  };

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
        {error && <p className='text-red-600 m-2'>{error}</p>}
        {message && <p className='text-green-600 m-2'>{message}</p>}
    </div>
  );
};

export default Register;
