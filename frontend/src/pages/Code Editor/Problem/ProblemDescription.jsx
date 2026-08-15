import { useSelector } from "react-redux";
import "./ProblemDescription.css";

export default function ProblemDescription() {

    const selectedProblem = useSelector(
        (state) => state.problem.selectedProblem
    );

    if (!selectedProblem) {
        return <div className="problem-card">Loading...</div>;
    }

    return (
        <div className="problem-card">

            <div className="problem-header">

                <h2>{selectedProblem.title}</h2>

                <span
                    className={`difficulty ${selectedProblem.difficulty.toLowerCase()}`}
                >
                    {selectedProblem.difficulty}
                </span>

            </div>

            <div className="problem-section">

                <h3>Description</h3>

                <p>{selectedProblem.description}</p>

            </div>

            <div className="problem-section">

                <h3>Constraints</h3>

                <ul>

                    {selectedProblem.constraints?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}

                </ul>

            </div>

            <div className="problem-section">

                <h3>Examples</h3>

                {selectedProblem.examples?.map((example, index) => (

                    <div key={index} className="example-box">

                        <h4>Example {index + 1}</h4>

                        <div className="io-box">
                            <strong>Input</strong>

                            <pre>{example.input}</pre>
                        </div>

                        <div className="io-box">
                            <strong>Output</strong>

                            <pre>{example.output}</pre>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}