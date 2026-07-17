import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import API from "./services/api";

function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await API.get("/leads");
      setLeads(response.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Search + Filter
  const filteredLeads = leads.filter((lead) => {
    const searchText = search.toLowerCase().trim();

    const matchSearch =
      lead.name.toLowerCase().includes(searchText) ||
      lead.email.toLowerCase().includes(searchText) ||
      lead.source.toLowerCase().includes(searchText);

    const matchStatus =
      filterStatus === "All" || lead.status === filterStatus;

    return matchSearch && matchStatus;
  });

  return (
    <>
      <Navbar />

      <div className="container">
        {/* HERO SECTION */}
        <div className="hero-section">
          <div className="hero-text">
            <h1>LeadFlow CRM</h1>

            <p className="hero-subtitle">
              Client Lead Management Dashboard
            </p>

            <p className="hero-description">
              Organize, track and manage your client leads efficiently from one
              centralized dashboard.
            </p>

            <div className="hero-buttons">
              <button
                className="hero-btn"
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ➕ Add Lead
              </button>

              <button
                className="hero-btn secondary"
                onClick={() =>
                  document
                    .getElementById("lead-list")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                📋 View Leads
              </button>
            </div>
          </div>
        </div>

        <h2>Lead Dashboard</h2>

        {/* DASHBOARD CARDS */}
        <div className="cards">
          <div
            className="card"
            onClick={() => {
              setFilterStatus("All");
              document
                .getElementById("lead-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h4>📊 Total Leads</h4>
            <h1>{leads.length}</h1>
          </div>

          <div
            className="card"
            onClick={() => {
              setFilterStatus("New");
              document
                .getElementById("lead-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h4>🆕 New</h4>
            <h1>{leads.filter((l) => l.status === "New").length}</h1>
          </div>

          <div
            className="card"
            onClick={() => {
              setFilterStatus("Contacted");
              document
                .getElementById("lead-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h4>📞 Contacted</h4>
            <h1>{leads.filter((l) => l.status === "Contacted").length}</h1>
          </div>

          <div
            className="card"
            onClick={() => {
              setFilterStatus("Converted");
              document
                .getElementById("lead-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <h4>✅ Converted</h4>
            <h1>{leads.filter((l) => l.status === "Converted").length}</h1>
          </div>
        </div>

        {/* SEARCH */}
        <div className="toolbar">
          <input
            type="text"
            placeholder="🔍 Search by Name, Email or Source..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                document
                  .getElementById("lead-list")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
          </select>
        </div>

        {/* FORM */}
        <div id="lead-form">
          <LeadForm fetchLeads={fetchLeads} />
        </div>

        {/* TABLE */}
        {loading ? (
          <div className="loading">⏳ Loading Leads...</div>
        ) : (
          <div id="lead-list">
            <LeadList
              leads={filteredLeads}
              fetchLeads={fetchLeads}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;