import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSelectedProblem } from "../../redux/problemSlice";
import "./CodeDashboard.css";

export const CodeDashboard = () => {
  const [problems, setProblems] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProblems();
  }, []);

  const getProblems = async () => {
    const res = await axios.get(
      "http://localhost:5001/problems/api/problems"
    );

    setProblems(res.data.problems);
  };

  return (
    <div className="dashboard">

      <div className="header">
        <h1>Live Coding Platform</h1>
        <p>Solve coding problems and improve your programming skills.</p>
      </div>

      <div className="problem-container">

        <div className="table-header">
          <h2>Problems</h2>
          <span>{problems.length} Questions</span>
        </div>

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>

          <tbody>

            {problems.map((problem, index) => (

              <tr key={problem._id}>

                <td>{index + 1}</td>

                <td
                  className="problem-title"
                  onClick={() => {
                    dispatch(setSelectedProblem(problem));
                    navigate("/problems");
                  }}
                >
                  {problem.title}
                </td>

                <td>
                  <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                    {problem.difficulty}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};