import React, { useState } from "react";
import {
    Wrapper,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledTextArea,
    FormContainer,
    StyledButton
} from "../../styles";
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
        <StyledForm onSubmit={handleSubmit}>
            <FormContainer>
                <StyledInput
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    required
                />

                <StyledInput
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                />
                <StyledInput
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                />
                <StyledTextArea
                    id="message"
                    placeholder="Enter your message..."
                    required
                />
                <StyledButton type="submit">{status}</StyledButton>
            </FormContainer>
        </StyledForm>
    );
};

export default Form;
