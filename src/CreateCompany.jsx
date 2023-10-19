import React, { useState } from 'react';

const CreateCompany = ({ onCompanyCreated }) => {
  const [newCompany, setNewCompany] = useState({ name: '', cnpj: '', address: '', contact: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCompany),
    })
      .then(response => response.json())
      .then(data => {
        onCompanyCreated(data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar empresa:', error);
      });
  };

  return (
    <div>
      <h3>Cadastrar Nova Empresa</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome da Empresa" value={newCompany.name} onChange={handleInputChange} />
        <input type="text" name="cnpj" placeholder="CNPJ" value={newCompany.cnpj} onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Endereço" value={newCompany.address} onChange={handleInputChange} />
        <input type="text" name="contact" placeholder="Contato" value={newCompany.contact} onChange={handleInputChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateCompany;
