import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops...</h1>
      <h2>
        {err.status}-{err.statusText}
      </h2>
      {/* <p>{err.error.message}</p> */}
    </div>
  );
};

export default ErrorPage;
