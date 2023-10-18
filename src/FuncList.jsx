import React, { useState } from 'react';
import './CompanyList.css';
import FuncDetails from './FuncDetails';

const FuncList = () => {
  const [companies, setCompanies] = useState([
    { name: 'func 01', cfp: '123456789', cargo: 'Rua A, 123', cnpj: 'email@func.com' },
    { name: 'func 02', cfp: '123456789', cargo: 'Rua A, 123', cnpj: 'email@func.com' },
    { name: 'func 01', cfp: '123456789', cargo: 'Rua A, 123', cnpj: 'email@func.com' },
    { name: 'func 01', cfp: '123456789', cargo: 'Rua A, 123', cnpj: 'email@func.com' },
    { name: 'func 01', cfp: '123456789', cargo: 'Rua A, 123', cnpj: 'email@func.com' },
    // Adicione os detalhes das outras empresas
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);

  const deleteCompany = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
    setSelectedCompany(null);
  };

  const showCompanyDetails = (index) => {
    setSelectedCompany(companies[index]);
  };

  return (
    <div className="container">
      <h2>Listagem de Funcionários</h2>
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
        <FuncDetails {...selectedCompany} />
      )}
    </div>
  );
};

export default FuncList;
