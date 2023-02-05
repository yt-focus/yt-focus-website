import { useState } from "react";
import emailjs from '@emailjs/browser'

import emailKeys from "../../keys";

function EmailForm () {

    const [email, setEmail] = useState("");

    const handleChange = event => {
        setEmail(event.target.value)
    }

    const sendEmail = () => {
        emailjs.send(emailKeys.serviceID,emailKeys.templateID,{email});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail();
      };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
            />
            <button type="submit" >Sumbit</button>
        </form>
    );
}

export default EmailForm;