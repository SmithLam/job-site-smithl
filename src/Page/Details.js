import React, { useState, useEffect } from "react";
import Navigation from "./components/NavigationBar";
import { useParams } from "react-router-dom";
import { Badge, Button, Row, Col, Container } from "react-bootstrap";
import {
  faMapMarker,
  faCalendar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

export default function Details(props) {
  const { id } = useParams();
  const [jobs, setJobs] = useState(null);


  const getData = async () => {
    let url = `${BACKEND_SERVER_URL}/jobs/${id}`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    console.log(result.district);
    setJobs(result);
  };

  useEffect(() => {
    getData();
  }, []);

  if (jobs === null) {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
  return (
    <div>
      <Navigation />
      <Container className="job-section">
        <div className="white-container">
          <Row>
            <Col>
              <img src={jobs.img} />
            </Col>
            <Col xs={10}>
              <h2>{jobs.title}</h2>
              <div>
                {jobs.tags.map((tag) => (
                  <Badge variant="success mr-2">{tag}</Badge>
                ))}
              </div>
              <div style={{ paddingTop: "10px", color: "grey" }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ marginRight: "10px" }}
                />{" "}
                {jobs.salary}
              </div>
              <div style={{ color: "grey" }}>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ marginRight: "10px" }}
                />{" "}
                {jobs.city} District {jobs.district}
              </div>
              <div style={{ color: "blue" }}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "10px" }}
                />
                <Moment fromNow>{jobs.time}</Moment>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Benefit</h2>
                <ul className="benefit-list" style={{ fontSize: "18px" }}>
                  {jobs.benefits.map((benefit) => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h2>Description</h2>
                <div>{jobs.description}</div>
              </div>
              <Button
                variant="danger"
                style={{ width: "100%", marginTop: "30px", fontSize: "18px" }}
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
