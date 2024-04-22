import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Error = () => {
  const error = useRouteError();

  let errorStatue: number;
  let errorStatueText: string;

  if (isRouteErrorResponse(error)) {
    errorStatue = error.status;
    errorStatueText = error.statusText;
  } else {
    errorStatue = 404;
    errorStatueText = 'Page Not Found';
  }

  return (
    <Container className="notFound">
      <h1>{errorStatue}</h1>
      <p>{errorStatueText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
