import React, { useState } from "react";


const FitnessClubRegistration = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [showMembers, setShowMembers] = useState(false);

  const handleChange = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMembers([...members, newMember]);
    alert("User added successfully");
    setNewMember({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="admin-container">
      <h1>Fitness Club Admin Page</h1>
      <form className="add-member-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newMember.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newMember.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={newMember.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={newMember.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add member</button>
      </form>
      <br />
      <button 
        className="view-member-button"
        onClick={() => {
          setShowMembers(!showMembers);
        } }
      >
        View Member List
      </button>
      {showMembers && (
        <table className="member-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FitnessClubRegistration;
