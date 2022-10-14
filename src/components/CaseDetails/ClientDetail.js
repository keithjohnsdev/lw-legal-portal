import { Header, Header1 } from "../Shared/Headers";
import {
  default as ClientDetailHeader1,
  ClientDetailHeader2,
  ClientDetailHeader3,
} from "./ClientDetailHeaders";
import { dummyClientViewData } from "../../graphql/dummyData";
import { default as Container } from "../Shared/Container";
import { default as BlueButton } from "../Shared/Buttons";
import Modal from "../Shared/Modal";
import { ModalHeader } from "../Shared/Headers";
import { useState } from "react";

const ClientDetail = (props) => {
  const data = dummyClientViewData;
  const [notesModal, setNotesModal] = useState(false);
  const [notes, setNotes] = useState(false);
  
  return (
    <div className="client-detail-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <ClientDetailHeader1 title={dummyClientViewData.name}/>
      <ClientDetailHeader2 data={dummyClientViewData} />
      <ClientDetailHeader3 data={dummyClientViewData} />
      <div className="client-info">
        <Container>
          <h3>Personal Information</h3>
          <div className="form-row">
            <div className="info-div">
              <p>First Name</p>
              <p className="info-p">{data.fName}</p>
            </div>
            <div className="info-div">
              <p>Last Name</p>
              <p className="info-p">{data.lName}</p>
            </div>
            <div className="info-div">
              <p>Armed Services Division</p>
              <p className="info-p">{data.division}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Email</p>
              <p className="info-p">{data.email}</p>
            </div>
            <div className="info-div">
              <p>Date of Birth</p>
              <p className="info-p">{data.dobNum}</p>
            </div>
            <div className="info-div">
              <p>Phone Number</p>
              <p className="info-p">{data.phone}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Address</p>
              <p className="info-p">{`${data.address1}, ${data.address2}`}</p>
            </div>
            <div className="info-div">
              <p>Military Service Start/End</p>
              <p className="info-p">{data.serviceTime}</p>
            </div>
            <div className="info-div">
              <p>Private Health Insurance</p>
              <p className="info-p">{data.insProvider}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="client-info">
        <Container>
          <h3>Claim Details</h3>
          <div className="form-row">
            <div className="info-div">
              <p>Claim Type</p>
              <p className="info-p">{data.claimType}</p>
            </div>
            <div className="info-div">
              <p>Diagnosis</p>
              <p className="info-p">{data.diagnosis}</p>
            </div>
            <div className="info-div">
              <p>Procedure Codes</p>
              <p className="info-p">{data.procedureCodes}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>NDC Codes</p>
              <p className="info-p">{data.NDCCodes}</p>
            </div>
            <div className="info-div">
              <p>Elements</p>
              <p
                className={`info-p ${data.elements === "Satisfied" && "green"}`}
              >
                {data.elements}
              </p>
            </div>
            <div className="info-div">
              <p>Status</p>
              <p className="info-p">{data.status}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Lien Due</p>
              <p className="info-p">{`$${data.lienDue.toLocaleString(
                "EN-US"
              )}`}</p>
            </div>
            <div className="info-div">
              <p>Settlement Value</p>
              <p className="info-p">{`$${data.settlementValue.toLocaleString(
                "EN-US"
              )}`}</p>
            </div>
            <div className="info-div">
              <p>VA Examiner / Reviewer</p>
              <p className="info-p">{data.VAReviewer}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Name of Reviewer</p>
              <p className="info-p">{data.reviewerName}</p>
            </div>
            <div className="info-div">
              <p>Claim Amount Sought</p>
              <p className="info-p">{`$${data.claimAmtSought.toLocaleString(
                "EN-US"
              )}`}</p>
            </div>
            <div className="info-div">
              <p>NPI</p>
              <p className="info-p">{data.NPI}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Disability Rating</p>
              <p className="info-p">{`${data.disabilityRating}%`}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="client-info">
        <Container>
          <h3>Counsel Details</h3>
          <div className="form-row">
            <div className="info-div">
              <p>Submitting Party</p>
              <p className="info-p">{data.submittingParty}</p>
            </div>
            <div className="info-div">
              <p>Lead Internal Attorney</p>
              <p className="info-p">{data.leadInternalAttorney}</p>
            </div>
            <div className="info-div">
              <p>Additional Attorneys</p>
              <p className="info-p">{data.addtlAttorneys}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Opposing Counsel</p>
              <p className="info-p">{data.opposingCounsel}</p>
            </div>
            <div className="info-div">
              <p>Case Referred From</p>
              <p className="info-p">{data.caseReferredFrom}</p>
            </div>
            <div className="info-div">
              <p>Link to Retainer</p>
              <p
                className="info-p link"
                onClick={() =>
                  window.open(`https://www.${data.linkToRetainer}`)
                }
              >
                {data.linkToRetainer}
              </p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Date Signed Retainer</p>
              <p className="info-p">{data.dateSignedRetainer}</p>
            </div>
          </div>
        </Container>
      </div>
      <section id="NDC-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Private Notes</h3>
            <h5
              className="external-form-link"
              onClick={() => {
                setNotesModal(true);
              }}
            >
              + Add Note
            </h5>
          </div>
          <Modal
            show={notesModal}
            onBackdropClick={() => {
              setNotesModal(false);
            }}
          >
            <ModalHeader
              onClickLeft={() => {
                setNotesModal(false);
              }}
              centerTitle="Add Note"
            />
            <div className="note-section">
              <Container>
                <form className="note-form">
                  <textarea
                    rows="8"
                    cols="88"
                    placeholder="Please write your note here."
                  />
                  <BlueButton
                    className="note-button"
                    type="submit"
                    value="Submit"
                    onClick={(e) => {
                        e.preventDefault();
                        setNotesModal(false);
                    }}
                  >
                    Submit
                  </BlueButton>
                </form>
              </Container>
            </div>
          </Modal>
          {notes ? (
            ""
          ) : (
            <>
              <hr />
              <p className="no-entry">
                No notes have been created. These are internal notes that will
                never be shared.
              </p>
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default ClientDetail;
