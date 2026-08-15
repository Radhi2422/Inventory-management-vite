import  {
  useState,
  useMemo,
  useCallback,
  useEffect,
  memo,
} from "react";
import { useSelector } from "react-redux";
import "./CodeEditor.css";
// import { handleFrontendError } from "../../controllers/logFrontendErrorController";

function CodeEditor() {
  const selectedProblem = useSelector(
    (state) => state.problem.selectedProblem
  );

  // Memoize starter code
  const starterCode = useMemo(
    () => selectedProblem?.starterCode || "",
    [selectedProblem]
  );

  const [code, setCode] = useState(starterCode);

  // Update editor when a different problem is selected
  useEffect(() => {
    setCode(starterCode);
  }, [starterCode]);

  // Memoized change handler
  const handleCodeChange = useCallback((e) => {
    setCode(e.target.value);
  }, []);

  // Memoized Run handler
  const handleRun = useCallback(() => {
    console.log("Running Code...");
    // API Call
  }, []);

  // Memoized Submit handler
  const handleSubmit = useCallback(() => {
    console.log("Submitting Code...");
    // API Call
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div className="editor-title">
          <h3>Code Editor</h3>
        </div>

        <div className="language-box">
          <label>Language</label>

          <select disabled>
            <option>Java</option>
          </select>
        </div>
      </div>

      <textarea
        className="editor-textarea"
        value={code}
        onChange={handleCodeChange}
        spellCheck={false}
      />

      <div className="editor-footer">
        <button className="run-btn" onClick={handleRun}>
          Run
        </button>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default memo(CodeEditor);