import React, { useState, useEffect } from 'react';
import './CompanyList.css';
import CompanyDetails from './CompanyDetails';
import CreateCompany from './CreateCompany';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [createCompanyModalOpen, setCreateCompanyModalOpen] = useState(false);

  useEffect(() => {
    // Use a função fetch ou uma biblioteca como o axios para fazer a solicitação HTTP.
    fetch('http://localhost:3000/api/companies') // Substitua a URL pelo seu endpoint local.
      .then(response => response.json())
      .then(data => {
        setCompanies(data);
      })
      .catch(error => {
        console.error('Erro ao buscar empresas:', error);
      });
  }, []);

  const deleteCompany = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
    setSelectedCompany(null);
  };

  const showCompanyDetails = (index) => {
    setSelectedCompany(companies[index]);
  };

  const handleCompanyCreated = (newCompany) => {
    // Adicione a nova empresa à lista de empresas.
    setCompanies([...companies, newCompany]);
    setCreateCompanyModalOpen(false);
  };

  return (
    <div className="container">
      <h2>Listagem de Empresas</h2>
      <button onClick={() => setCreateCompanyModalOpen(true)}>Cadastrar Empresa</button>
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

      {createCompanyModalOpen && (
        <CreateCompany onCompanyCreated={handleCompanyCreated} />
      )}
    </div>
  );
};

export default CompanyList;
