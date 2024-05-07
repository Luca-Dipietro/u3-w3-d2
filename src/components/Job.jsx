import { Row, Col, Button } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1}>
        <Button
          type="button"
          onClick={() => {
            dispatch(addToFavoritesAction(data));
          }}
        >
          <FaRegStar />
        </Button>
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
