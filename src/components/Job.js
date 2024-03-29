import React from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";

const Job = ({
  id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        {/* content center later */}
        <div className="content">
          <div className="content-center">
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendar />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div className={`status ${status}`}>{status}</div>
          </div>
        </div>
        {/* footer content */}
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => setEditJob(id)}
              className="btn edit-btn"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
