import React, { useState } from "react";
import { Wrapper, TitleWrapper, Title, Column } from "../styles";
import Form from "./Form";

const ContactForm = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Send us a message...</Title>
            </TitleWrapper>
            <Column>
                <Form />
            </Column>
        </Wrapper>
    );
};

export default ContactForm;
