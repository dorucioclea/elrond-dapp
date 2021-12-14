import * as React from "react";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignModal from "./SignModal";

const SignMessage = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div
        className="action-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <button className="btn">
          <FontAwesomeIcon icon={faSign} className="text-primary" />
        </button>
        <a href="/" className="text-white text-decoration-none">
          Sign Message
        </a>
      </div>
      <SignModal
        show={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};
export default SignMessage;
