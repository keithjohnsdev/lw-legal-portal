import { useState, useEffect } from "react";
import { GrayButton, default as BlueButton } from "./Buttons";

const MessageModal = (props) => {
  const [animateOut, setAnimateOut] = useState("out kill");
  useEffect(() => {
    if (props.show) {
      setAnimateOut("");
    } else if (!props.show) {
      if (animateOut === "out kill") {
        // if already out, stays out, avoiding unnecessary mounting/animating on first render
      } else {
        setAnimateOut("out");
        setTimeout(() => {
          setAnimateOut("out kill");
        }, 300);
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
        <div className="card">
          <div className="filter-modal">
            <div className="filter-header">
              <p>Message Group</p>
            </div>
            <div className="filter-body message-modal">
              <h3>{`Send Message to ${
                props.client ? props.client : "(78,546) Clients"
              }`}</h3>
              <p className="message-title">Message Body</p>
              <div className="message-div">
                <p>
                  Hello,
                  <br />
                  <br />
                  Your legal representative “ABC Law Firm” kindly asks you to
                  download LifeWallet so we can gather missing information and
                  records in order to submit your claim. The download link for
                  the application can be found here: <br /> <br />
                  <span style={{ fontWeight: "600" }}>iTunes</span>
                  <br />
                  <span
                    className="email"
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/lifewallet-by-msp-recovery/id1601283416"
                      )
                    }
                  >
                    https://apps.apple.com/us/app/lifewallet-by-msp-recovery/id1601283416
                  </span>
                  <br /> <br />
                  <span style={{ fontWeight: "600" }}>Google Play</span>
                  <br />
                  <span
                    className="email"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.lifewallet"
                      )
                    }
                  >
                    https://play.google.com/store/apps/details?id=com.lifewallet
                  </span>
                </p>
              </div>
              <div className="checkbox-wrapper">
                <div className="filter-checkbox-div">
                  <input type="checkbox" id="check1" />
                  <label htmlFor="check1">
                    <p>Send Text</p>
                  </label>
                </div>
                <div className="filter-checkbox-div">
                  <input type="checkbox" id="check2" />
                  <label htmlFor="check2">
                    <p>Send Email</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-footer">
              <GrayButton onClick={props.onBackdropClick}>Cancel</GrayButton>
              <BlueButton onClick={props.handleSend}>Send</BlueButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MessageSuccessModal = (props) => {
  const [animateOut, setAnimateOut] = useState("out kill");
  useEffect(() => {
    if (props.show) {
      setAnimateOut("");
    } else if (!props.show) {
      if (animateOut === "out kill") {
        // if already out, stays out, avoiding unnecessary mounting/animating on first render
      } else {
        setAnimateOut("out");
        setTimeout(() => {
          setAnimateOut("out kill");
        }, 300);
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
        <div className="card">
          <div className="filter-modal message-success-modal">
            <div className="filter-header">
              <p>Message Sent</p>
            </div>
            <div className="filter-body message-success-modal">
              <svg
                width="100"
                height="100"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9845 64C49.5234 64 64 49.5234 64 32.0155C64 14.4766 49.4925 0 31.9536 0C14.4456 0 0 14.4766 0 32.0155C0 49.5234 14.4766 64 31.9845 64ZM27.7777 48.1624C26.6022 48.1624 25.6742 47.6365 24.7772 46.5848L15.8685 35.7274C15.3117 35.0469 15.0333 34.2736 15.0333 33.5312C15.0333 31.8608 16.3325 30.5926 17.9101 30.5926C18.869 30.5926 19.6733 30.9947 20.4466 31.9227L27.6849 41.0479L41.6356 18.7762C42.3161 17.6626 43.2131 17.1368 44.1721 17.1368C45.7187 17.1368 47.2035 18.2194 47.2035 19.8589C47.2035 20.6013 46.8323 21.3746 46.3992 22.0551L30.6854 46.492C29.943 47.6056 28.9531 48.1624 27.7777 48.1624Z"
                  fill="#3BC86B"
                />
              </svg>

              <h3>Success!</h3>
              <p>{`Message sent to ${
                props.client ? props.client : "78,546 Clients"
              }.`}</p>
            </div>
            <div className="filter-footer">
              <BlueButton onClick={props.onBackdropClick}>Done</BlueButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
