import ProblemDescription from "./Problem/ProblemDescription";
import CodeEditor from "./CodeEditor"
import TestCases from "./Problem/TestCases";
import Result from "./Problem/Result";

import "./ProblemPage.css";

export default function ProblemPage() {
  return (
    <div className="problem-page">

      {/* Left Panel */}
      <div className="left-panel">
        <ProblemDescription />
      </div>

      {/* Right Panel */}
      <div className="right-panel">

        {/* Editor */}
        <div className="editor-section">
          <CodeEditor />
        </div>

        {/* Bottom */}
        <div className="bottom-section">

          <div className="testcase-section">
            <TestCases />
          </div>

          <div className="result-section">
            <Result />
          </div>

        </div>

      </div>

    </div>
  );
}