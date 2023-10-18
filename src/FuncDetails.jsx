import React from 'react';

const FuncDetails = ({ name, cfp, cargo, cnpj }) => {
  return (
    <div className="company-details">
      <h3>{name}</h3>
      <p>cfp: {cfp}</p>
      <p>cargo: {cargo}</p>
      <p>cnpj: {cnpj}</p>
    </div>
  );
};

export default FuncDetails;
