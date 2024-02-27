// App.tsx
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Step1Form from "./components/Step1Form/Step1Form";
// import Step2Form from "./components/Step2Form/Step2Form";

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handleStep1Submit = (data: any) => {
    store.dispatch(setUserData(data));
    setStep(2);
  };

  const handleStep2Submit = (data: any) => {
    store.dispatch(setAddressData(data));
    console.log("Complete Form Data:", {
      ...store.getState().userData,
      ...store.getState().addressData,
    });
  };

  return (
    <Provider store={store}>
      <div>
        {step === 1 && <Step1Form onSubmit={handleStep1Submit} />}
        {/* {step === 2 && <Step2Form onSubmit={handleStep2Submit} />} */}
      </div>
    </Provider>
  );
};

export default App;
function setUserData(data: any): any {
  throw new Error("Function not implemented.");
}

function setAddressData(data: any): any {
  throw new Error("Function not implemented.");
}
