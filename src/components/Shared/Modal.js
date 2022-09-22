import { useState, useEffect } from "react";

const Modal = (props) => {
  const [animateOut, setAnimateOut] = useState("out kill");

  useEffect(() => {
    if (props.show) {
      setAnimateOut("");
    } else if (!props.show) {
      if (animateOut === "out kill") {
        // if already out, stays out, avoiding unnecessary mounting/animating on first render
      } else {
        setAnimateOut("out");
        setTimeout(() => {setAnimateOut("out kill")}, 300)
      }
    }
  }, [props.show]);

  return (
    <div>
      <div
        className={`modal-backdrop ${animateOut}`}
        onClick={props.onBackdropClick}
      ></div>
      <div className={`modal ${animateOut}`}>
        <div className="card">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
