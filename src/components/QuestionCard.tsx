import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonGrid,
  IonLabel,
  IonRippleEffect,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import moment from "moment";
interface ContainerProps {
  question: any;
  openDetails: Function;
}
const QuestionCard: React.FC<ContainerProps> = ({ question, openDetails }) => {
  return (
    <IonCard onClick={() => openDetails(question)} key={question.question_id}>
      <IonRippleEffect type="bounded"></IonRippleEffect>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sizeMd="1"
              sizeXs="3"
            >
              <IonAvatar>
                <img src={question.owner.profile_image} alt="avatar" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 ion-text className="title">
                      {question.title}
                    </h2>
                    <span className="subscript">
                      {`asked ${moment
                        .unix(question.creation_date)
                        .format("MMM DD, 'YY")} by `}
                      <a target="_blank" href={question.owner.link}>
                        {question.owner.display_name}
                      </a>
                    </span>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default QuestionCard;
