
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
        {/* Do not remove the main div */}
       {step===1 && <Step step={1} setStep={setStep} name={"Customer Details"} id1={"first_name"} id2={"last_name"} label1={"First Name"} label2={"Last Name"} />}
        {step === 2 && <Step step={2} setStep={setStep} name={"Car Details"} id1={"model"} id2={"car_price"} label1={"Brand"} label2={"Model"} />}
       {step === 3 && <Step step={3} setStep={setStep} name={"Payment Details"} id1={"card_info"} id2={"expiry_date"} label1={"Credit Card Number"} label2={"Expiration Date"} />}
    </div>
  )
}

export default App
