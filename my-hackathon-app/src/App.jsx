import { useState } from "react";

function App() {
  // 1. Unified state setup using lowercase tracking keys
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    batch: "",
    gender: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. Safely capture input changes dynamically
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // 3. Handle submission to your Django backend with trailing slash
  async function handleSubmit(e) {
    e.preventDefault(); 
    setLoading(true);
    setError(null);
    setResult(null); // Clear previous output on retry

    try {
      const response = await fetch("http://127.0.0.1:8000/api/data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}. Failed to submit.`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Hackathon Registration</h1>
      <p>Fill out your information to register for the upcoming event.</p>
      <hr />

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        
        <div>
          <label style={{ fontWeight: "bold" }}>Name:</label><br />
          <input 
            type="text"
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Department:</label><br />
          <input 
            type="text"
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Batch:</label><br />
          <input 
            type="text"
            name="batch" 
            value={formData.batch} 
            onChange={handleChange} 
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Gender:</label><br />
          <input 
            type="text"
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: "10px", 
            backgroundColor: loading ? "#ccc" : "#007bff", 
            color: "white", 
            border: "none", 
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>

      {/* --- Dynamic Feedback Interfaces --- */}
      
      {error && (
        <div style={{ padding: "12px", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "4px", marginTop: "20px" }}>
          <strong>⚠️ Submission Error:</strong> {error}
          <p style={{ fontSize: "12px", margin: "5px 0 0 0" }}>Make sure your Django server is awake and CORS headers are configured.</p>
        </div>
      )}

      {result && (
        <div style={{ padding: "12px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "4px", marginTop: "20px" }}>
          <strong>🎉 Registration Successful!</strong>
          <p style={{ fontSize: "14px", margin: "5px 0 0 0" }}>Server response dataset:</p>
          <pre style={{ backgroundColor: "#e2f0d9", padding: "10px", borderRadius: "4px", fontSize: "12px", overflowX: "auto" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;