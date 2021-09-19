import React from "react";
import styled from "styled-components";
import { StyledMaxWidthSection } from "../../../../style";
import {
    MainWrapper,
    Section,
    ContactContainer,
    ServiceContainer
} from "./styles";
import Services from "./ServiceList";
import Title from "../../../Shared/Title";
import ContactForm from "./ContactForm";
const ContactSection = (props) => {
    return (
        <MainWrapper>
            <Title color="primary" text="Contact" />
            <StyledMaxWidthSection maxWidth={true} style={{ width: "100%" }}>
                <Section>
                    <ServiceContainer>
                        <Services />
                    </ServiceContainer>
                    <ContactContainer>
                        <ContactForm />
                    </ContactContainer>
                </Section>
            </StyledMaxWidthSection>
        </MainWrapper>
    );
};

export default ContactSection;
