import {
  IonCol,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import "./QuestionsContainer.css";
import { StackOverFlowGet } from "../utils/Requests";
import { data } from "../dummy";

import QuestionCard from "./QuestionCard";
import QuestionDetailsModal from "./QuestionDetailsModal";
import { getQuestions } from "../redux/actions/questionsActions";
import { connect, ConnectedProps } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";

const mapStateToProps = ({ data }: any) => ({
  questions: data.questions,
  hasMore: data.hasMore,
  isLoading: data.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  getQuestions: () => dispatch(getQuestions()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

const QuestionsContainer = ({
  questions,
  getQuestions,
  hasMore,
  isLoading,
}: propsFromRedux) => {
  const [modalProps, setModalProps] = useState<any>({
    isOpen: false,
    question: undefined,
  });

  const openModal = (question: any) =>
    setModalProps({ isOpen: true, question });

  async function searchNext($event: CustomEvent<void>) {
    await getQuestions();

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }
  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="container">
      <QuestionDetailsModal
        {...modalProps}
        closeModal={() =>
          setModalProps((prevState: any) => ({ ...prevState, isOpen: false }))
        }
      />
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol sizeMd="9">
            {questions.map((question: any) => (
              <QuestionCard question={question} openDetails={openModal} />
            ))}
            <IonInfiniteScroll
              threshold="100px"
              disabled={false}
              onIonInfinite={(e: CustomEvent<void>) => {
                searchNext(e);
              }}
            >
              <IonInfiniteScrollContent loadingSpinner={null}>
                <LoadingIndicator />
              </IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
