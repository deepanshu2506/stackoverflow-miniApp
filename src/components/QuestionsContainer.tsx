import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonRow,
  IonText,
} from "@ionic/react";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import "./QuestionsContainer.css";
import { StackOverFlowGet } from "../utils/Requests";
import { data } from "../dummy";

import QuestionCard from "./QuestionCard";
import LoadingIndicator from "./LoadingIndicator";
import QuestionDetailsModal from "./QuestionDetailsModal";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [modalProps, setModalProps] = useState<any>({
    isOpen: false,
    question: undefined,
  });
  let page = 1;
  const openModal = (question: any) =>
    setModalProps({ isOpen: true, question });
  // function getData() {
  //   return new Promise((resolve, reject) => {
  //     page++;
  //     StackOverFlowGet({ page: page + 1 })
  //       .then(({ items, has_more }) => {
  //         setQuestions([...questions, ...items]);
  //         resolve();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // }

  function getData() {
    setQuestions([...questions, ...data.items]);
  }

  async function searchNext($event: CustomEvent<void>) {
    await getData();

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }
  React.useEffect(() => {
    getData();
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
              <IonInfiniteScrollContent
                loadingSpinner="circular"
                loadingText="loading..."
              ></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
