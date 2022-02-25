import React from "react";

export default function StepInputField(props) {
    return (props.stepdir.map((value, idx) => {
        console.log(value)
        let step1 = `step-${idx}`
        return (<li key={value.index}>
            <div className="input-group ">
                <input
                    className="form-control m-3"
                    placeholder={step1}
                    id={step1}
                    data-id={idx}
                    name="step"

                    value={props.stepdir.step}
                    onChange={onchange}
                />



                {idx === (props.stepdir.length - 1) ? <button type="button" onClick={() => props.addst()} className="m-3 btn btn-outline-secondary">Add</button> : <button type="button" onClick={() => props.deletest(value)} className="m-3 btn btn-outline-secondary">
                    Delete
                </button>}

            </div>
        </li>
        )
    })

    );
}
