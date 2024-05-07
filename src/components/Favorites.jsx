import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavoritesAction } from "../redux/actions";
import { GoStarFill } from "react-icons/go";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">
            Favorite Companies{" "}
            <span className="display-6">
              <Link to="/">Home</Link>
            </span>
          </h1>
          {favorites.map((company, index) => (
            <Row
              key={index}
              className="mx-0 mt-3 p-3 align-items-center"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Col xs={1}>
                <GoStarFill
                  onClick={() => {
                    dispatch(removeFromFavoritesAction(company));
                  }}
                />
              </Col>
              <Col xs={3}>
                <Link to={`/${company.company_name}`}>{company.company_name}</Link>
              </Col>
              <Col xs={8}>
                <a href={company.url} target="_blank" rel="noreferrer">
                  {company.title}
                </a>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
