import React, { useState } from "react";
import { Wrapper } from "../../styles";
import { submitContact } from "../../../../../../api/services/user";

const Form = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, phone, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        };
        let response = await submitContact(JSON.stringify(details));
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default Form;
