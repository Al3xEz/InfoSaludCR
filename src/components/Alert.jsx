import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "text-red-700 bg-red-100" : "text-green-800 bg-green-100"
      } border border-green-800 p-2 px-4 rounded-lg`}
    >
      {alerta.mensaje} <FontAwesomeIcon icon={faFaceLaughWink} />
    </div>
  );
};

export default Alert;
