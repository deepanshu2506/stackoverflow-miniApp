import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonGrid,
  IonHeader,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import moment from "moment";
import "./QuestionDetailsModal.css";
const QuestionDetailsModal = ({ question, ...props }) => {
  return (
    <IonModal isOpen={props.isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" onClick={props.closeModal} />
          </IonButtons>
          <IonTitle>Question Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol className="avatar-div" sizeMd="2" sizeXs="3">
            <IonAvatar>
              <img src={question?.owner.profile_image} alt="avatar" />
            </IonAvatar>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCol size="12">
                <IonText>
                  <h2 ion-text className="title">
                    {question?.title}
                  </h2>
                  <span>
                    {`asked ${moment
                      .unix(question?.creation_date)
                      .format("MMM DD, 'YY")} by `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={question?.owner.link || "/home"}
                    >
                      {question?.owner.display_name}
                    </a>
                  </span>
                </IonText>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
        <IonRow className="ion-no-margin">
          <IonCol className="tag-label" sizeMd="2" sizeXs="3">
            <IonText>
              <h4>Tags: </h4>
            </IonText>
          </IonCol>
          <IonCol className="tags-container">
            {question?.tags.map((tag) => (
              <IonChip>
                <IonLabel>{tag}</IonLabel>
              </IonChip>
            ))}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonGrid className="table">
              <IonRow>
                <IonCol sizeXs="5" size="3">
                  Answer Count :
                </IonCol>
                <IonCol>{question?.answer_count}</IonCol>
              </IonRow>
              <IonRow>
                <IonCol sizeXs="5" size="3">
                  Last Answer Date:
                </IonCol>
                <IonCol>
                  {moment
                    .unix(question?.last_activity_date)
                    .format("Do MMM, YYYY LT")}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol sizeXs="5" size="3">
                  Link:
                </IonCol>
                <IonCol>
                  <a target="_blank" href={question?.link}>
                    Click Here to go to the question
                  </a>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonModal>
  );
};

export default QuestionDetailsModal;
