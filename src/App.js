import React, { useState, useEffect } from "react";
import expertsData from "./mockData";
import ExpertCard from "./ExpertCard";
import "./App.css"

function App() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setExperts(expertsData);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredExperts = experts.filter((expert) =>
    expert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>TalentKonnect Experts</h2>
      <input
        type="text"
        placeholder="Search Experts..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading experts...</p>
      ) : (
        <div className="expert-grid">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
