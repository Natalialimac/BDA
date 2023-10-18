import React, { useState } from 'react';
import './CompanyList.css';
import CompanyDetails from './CompanyDetails';

const CompanyList = () => {
  const [companies, setCompanies] = useState([
    { name: 'Empresa 01', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    { name: 'Empresa 02', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    { name: 'Empresa 01', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    { name: 'Empresa 01', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    { name: 'Empresa 01', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    { name: 'Empresa 01', cnpj: '123456789', address: 'Rua A, 123', contact: 'email@empresa.com' },
    // Adicione os detalhes das outras empresas
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);

  const deleteCompany = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
    setSelectedCompany(null); // Limpar os detalhes da empresa ao excluí-la
  };

  const showCompanyDetails = (index) => {
    setSelectedCompany(companies[index]);
  };

  return (
    <div className="container">
      <h2>Listagem de Empresas</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name}
            <button onClick={() => deleteCompany(index)}>Deletar</button>
            <button onClick={() => showCompanyDetails(index)}>Detalhes</button>
          </li>
        ))}
      </ul>
      {selectedCompany && (
        <CompanyDetails {...selectedCompany} />
      )}
    </div>
  );
};

export default CompanyList;
