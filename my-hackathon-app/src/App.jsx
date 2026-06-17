import useState from "react";

function App() {
  // useState stores data that can changes
  const [formData, setFormData] = useState({
    name: "",
    Department: "",
    Batch: "",
    Gender: ""
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // save what the user is typing in the form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle submit action safely
  function handleSubmit(e) {
    e.preventDefault(); //stops page from refreshing
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("")

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }
      const data = await response.json();
      setResult(data);
    }catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Hackathon Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Department:</label>
          <input name="Department" value={formData.Department} onChange={handleChange} />
        </div>

        <div>
          <label>Batch:</label>
          <input name="Batch" value={formData.Batch} onChange={handleChange} />
        </div>

        <div>
          <label>Gender:</label>
          <input name="Gender" value={formData.Gender} onChange={handleChange} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default App;