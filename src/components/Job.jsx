import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoritesAction, removeFromFavoritesAction } from "../redux/actions";
import { GoStar, GoStarFill } from "react-icons/go";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFav = favorites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1}>
        {isFav ? (
          <GoStarFill
            onClick={() => {
              dispatch(removeFromFavoritesAction(data.company_name));
            }}
          />
        ) : (
          <GoStar
            onClick={() => {
              dispatch(addToFavoritesAction(data.company_name));
            }}
          />
        )}
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
