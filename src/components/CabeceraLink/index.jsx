import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function CabeceraLink({ url, children }) {
  return <Link to={url}>{children}</Link>;
}

export default CabeceraLink;
