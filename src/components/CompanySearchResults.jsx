import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAction } from "../redux/actions";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.company.content);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyAction(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">
            Job posting for: {params.company}{" "}
            <span className="display-6">
              <Link to="/">Home</Link>
            </span>{" "}
            <span className="display-6">
              <Link to="/favorites">View Favorites</Link>
            </span>
          </h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
