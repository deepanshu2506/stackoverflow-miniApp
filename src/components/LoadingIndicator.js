import { IonCard, IonCardContent, IonSpinner } from "@ionic/react";
import React from "react";

const LoadingIndicator = (props) => {
  return (
    <IonCard>
      <IonCardContent className="ion-text-center">
        <IonSpinner color="primary" />
      </IonCardContent>
    </IonCard>
  );
};

export default LoadingIndicator;
