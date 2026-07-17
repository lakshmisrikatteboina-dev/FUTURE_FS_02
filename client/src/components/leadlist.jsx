import API from "../services/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function LeadList({ leads, fetchLeads }) {
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/leads/${id}`, { status });

      toast.success("Status updated successfully!");
      fetchLeads();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const deleteLead = async (id) => {
    const result = await Swal.fire({
      title: "Delete Lead?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await API.delete(`/leads/${id}`);

      toast.success("Lead deleted successfully!");
      fetchLeads();

      Swal.fire({
        title: "Deleted!",
        text: "Lead has been removed successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      toast.error("Failed to delete lead");
    }
  };

  const getBadgeClass = (status) => {
    if (status === "New") return "status-new";
    if (status === "Contacted") return "status-contacted";
    if (status === "Converted") return "status-converted";
    return "";
  };

  return (
    <div id="lead-list" style={{ marginTop: "40px" }}>
      <h2>📋 All Leads</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Created On</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                style={{
                  padding: "60px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div style={{ fontSize: "60px" }}>📭</div>

                  <h2
                    style={{
                      margin: 0,
                      color: "#1e3a8a",
                    }}
                  >
                    No Leads Found
                  </h2>

                  <p
                    style={{
                      color: "#6b7280",
                      margin: 0,
                      fontSize: "16px",
                    }}
                  >
                    Try changing your search or add a new client lead.
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>

                <td>{lead.email}</td>

                <td>{lead.source}</td>

                <td>
                  <span className={getBadgeClass(lead.status)}>
                    {lead.status}
                  </span>
                </td>

                <td>{lead.notes}</td>

                <td>
                  {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead._id, e.target.value)
                    }
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                    }}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Converted">Converted</option>
                  </select>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteLead(lead._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;