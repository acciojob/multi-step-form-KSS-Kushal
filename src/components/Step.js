import React from 'react'

const Step = ({step, setStep, name, id1, id2, label1, label2, value1, value2, setValue1, setValue2}) => {
    console.log(step)
  return (
    <div id={`step${step}`}>
    <label htmlFor={id1}>{label1}</label>
    <input type="text" id={id1} />
    <label htmlFor={id2}>{label2}</label>
    <input type="text" id={id2} />
    {step !== 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
    {step !== 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
    {step === 3 && <button>Submit</button>}
  </div>
  )
}

export default Step