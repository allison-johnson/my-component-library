import React from 'react'
import './Form.css'

const Form = (props) => {
    let classList = [];
    let formLabel;
    let input;

    //Add size class for all input types
    if (props.size) {
        classList.push(`input-${props.size}`)
    } else {
        classList.push('input-small')
    }


    if (props.type === "textInput") {
        formLabel = props.formLabel ? <label for="inpField">{props.formLabel}</label> : null
        
        if (props.placeholder) {
            input = <input className={classList.join(' ')} type="text" id="inpField" placeholder={props.placeholder}/>
        } else {
            input = <input className={classList.join(' ')} type="text" id="inpField" placeholder={props.formLabel}/>
        }
    }//textInput type

    else if (props.type === "selectInput") {
        if (props.filled) {
            classList.push("filled")
        }

        input = props.formLabel ? 
            <select className={classList.join(' ')}><option>{props.formLabel}</option><option>Option 1</option><option>Option 2</option></select>
        : <select className={classList.join(' ')}><option>Select</option><option>Option 1</option><option>Option 2</option></select>
    }//selectInput type 

    return (
        <div>
          <form>
            {formLabel}
            <br></br>
            {input}
          </form>
        </div>
    )
}

export default Form;

{/* <label for="email">Email</label><br></br>
<input type="text" name="email" placeholder="Email Address" /> */}