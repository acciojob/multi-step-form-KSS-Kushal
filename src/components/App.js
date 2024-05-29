
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
        {/* Do not remove the main div */}
        <Step step={step} setStep={setStep} name={"Customer Details"} id1={"first_name"} id2={"last_name"} label1={"First Name"} label2={"Last Name"} />
        <Step step={step} setStep={setStep} name={"Car Details"} id1={"model"} id2={"car_price"} label1={"Brand"} label2={"Model"} />
        <Step step={step} setStep={setStep} name={"Payment Details"} id1={"card_info"} id2={"expiry_date"} label1={"Credit Card Number"} label2={"Expiration Date"} />
    </div>
  )
}

export default App
