import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

function LeadForm({ fetchLeads }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    status: "New",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", formData);

      toast.success("Lead Added Successfully!");

      setFormData({
        name: "",
        email: "",
        source: "",
        status: "New",
        notes: "",
      });

      fetchLeads();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to add lead");
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        marginBottom: "35px",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          color: "#2563eb",
        }}
      >
        ➕ Add New Lead
      </h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="👤 Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="source"
          placeholder="🌐 Lead Source"
          value={formData.source}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="status-select"
        >
          <option value="New">Status - New</option>
          <option value="Contacted">Status - Contacted</option>
          <option value="Converted">Status - Converted</option>
        </select>

        <textarea
          name="notes"
          placeholder="📝 Additional Notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">
          ➕ Add Lead
        </button>
      </form>
    </div>
  );
}

export default LeadForm;