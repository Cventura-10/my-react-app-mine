import React, { useState, useEffect } from 'react';

const ModuleList = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/modules')
      .then(response => response.json())
      .then(data => setModules(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="module-list">
      <h2>Available Modules</h2>
      {modules.map(module => (
        <div key={module.id} className="module-card">
          <h3>{module.title}</h3>
          <p>{module.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
