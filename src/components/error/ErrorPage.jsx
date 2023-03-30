import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <h1 className='.cloak__wrapper .cloak__container .cloak'>404</h1>
        <h2>Page not found!</h2>
        <p>
        We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
        </p>
        <a href='#'>Home</a>
    </>
  );
}