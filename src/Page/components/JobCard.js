import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function JobCard(props) {
  return (
    <div className="job-content">
      <Row className="job-card-row">
        <Col md={2}>
          <div className="jobcard-logo">
            <img alt={props.job.title} src={props.job.img} />
          </div>
        </Col>
        <Col md={8}>
          <div className="jobcard-descriptions">
            <Link style={{ color: "black" }} to={`/jobs/${props.id}`}>
              <h2 className="jobcard-title">{props.job.title}</h2>
            </Link>
            <div>$ {props.job.salary}</div>
            <div>
              <ul className="benefit-list">
                {props.job.benefits.map((benefit) => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              {props.job.tags.map((tag) => (
                <Badge variant="danger mr-2" className="badge-style">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
        <Col md={2}>
          <div className="date-location-box">
            {props.job.isHotjob ? (
              <div className="hotjob-label">Hot Job</div>
            ) : (
              <div></div>
            )}

            <div className="jobcard-location">
              <div>{props.job.city}</div>
              <div>District {props.job.district}</div>
            </div>
            <div className="job-time">
              <Moment fromNow>{props.job.time}</Moment>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
