import React from 'react'
import {Row, Col, Badge} from 'react-bootstrap'
import Moment from 'react-moment';

const jobSelect = () =>{
    console.log("You select this job")
}



export default function JobCard(props) {
    return (
        <div className="job-content" onClick={() => jobSelect()}>
        <Row>
          <Col md={2}>
            <div className="jobcard-logo">
              <img src={props.job.img} />
            </div>
          </Col>
          <Col md={8}>
            <div className="jobcard-descriptions">
              <h2 className="jobcard-title">{props.job.title}</h2>
              <div>$ {props.job.salary}</div>
              <div>
                <ul className="benefit-list">
                  {props.job.benefits.map(benefit => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                {props.job.tags.map(tag => (
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
              <div className="job-time"><Moment fromNow>{props.job.time}</Moment></div>
            </div>
          </Col>
        </Row>
      </div>
    )
}
