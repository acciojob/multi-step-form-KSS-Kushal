import React from 'react'

const Step = ({step, setStep, name, id1, id2, label1, label2, value1, value2, setValue1, setValue2}) => {
  return (
    <div>
        <p>{name}</p>
        <div>
            <label htmlFor={id1}>{label1}</label>
            <input type="text" id={id1} className="" value={value1} onChange={e=>setValue1(e.target.value)} />
        </div>
        <div>
            <label htmlFor={id2}>{label2}</label>
            <input type="text" id={id2} className="" value={value2} onChange={e=>setValue2(e.target.value)} />
        </div>
        {step!==1 && <button onClick={()=>setStep(prev=>prev-1)}>Previous</button>}
        {step!==3 && <button onClick={()=>setStep(prev=>prev+1)}>Next</button>}
        {step===3 && <button>Submit</button>}
    </div>
  )
}

export default Step