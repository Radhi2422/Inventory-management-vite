import { useSelector } from "react-redux";
import "./TestCases.css";

export default function TestCases() {

    const selectedProblem = useSelector(
        (state) => state.problem.selectedProblem
    );

    if (!selectedProblem) {
        return null;
    }

    return (

        <div className="testcase-container">

            <div className="testcase-header">
                <h3>Sample Test Cases</h3>
            </div>

            {selectedProblem.examples?.map((example, index) => (

                <div className="testcase-card" key={index}>

                    <h4>Example {index + 1}</h4>

                    <div className="testcase-box">

                        <label>Input</label>

                        <pre>{example.input}</pre>

                    </div>

                    <div className="testcase-box">

                        <label>Output</label>

                        <pre>{example.output}</pre>

                    </div>

                </div>

            ))}

        </div>

    );
}