import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
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
  const parser = new DOMParser();
  return (
    <IonCard onClick={() => openDetails(question)} key={question.question_id}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol className="avatar-div" sizeMd="1" sizeXs="3">
              <IonAvatar>
                <img src={question.owner.profile_image} alt="avatar" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h2 ion-text className="title">
                      {
                        parser.parseFromString(question.title, "text/html").body
                          .innerHTML
                      }
                    </h2>
                    <span className="subscript">
                      {`asked ${moment
                        .unix(question.creation_date)
                        .format("MMM DD, 'YY")} by `}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={question.owner.link}
                      >
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
