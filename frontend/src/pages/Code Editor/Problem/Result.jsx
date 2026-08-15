import "./Result.css";

export default function Result() {
  // Future response from backend
  const result = null;

  return (
    <div className="result-container">

      <div className="result-header">
        <h3>Submission Result</h3>
      </div>

      {!result ? (
        <div className="empty-result">

          <div className="status-icon">⌛</div>

          <h4>Not Submitted</h4>

          <p>
            Write your solution and click <strong>Submit</strong> to evaluate
            your code.
          </p>

        </div>
      ) : (
        <div className="result-content">

          <div className="accepted">
            Accepted
          </div>

          <div className="stats">

            <div className="stat-card">
              <span>Passed</span>
              <h2>3 / 3</h2>
            </div>

            <div className="stat-card">
              <span>Runtime</span>
              <h2>28 ms</h2>
            </div>

            <div className="stat-card">
              <span>Memory</span>
              <h2>42 MB</h2>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}