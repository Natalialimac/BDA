import React from 'react';

const CompanyDetails = ({ name, cnpj, address, contact }) => {
  return (
    <div className="company-details">
      <h3>{name}</h3>
      <p>CNPJ: {cnpj}</p>
      <p>Endereço: {address}</p>
      <p>Contato: {contact}</p>
    </div>
  );
};

export default CompanyDetails;
