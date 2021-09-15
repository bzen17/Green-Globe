import React from "react";
import styled from "styled-components";
import { StyledMaxWidthSection } from "../../../../style";
import {
    MainWrapper,
    Section,
    ContactContainer,
    ServiceContainer
} from "./styles";
import Ring from "./ServiceList";
import Title from "../../../Shared/Title";

const ContactSection = (props) => {
    return (
        <MainWrapper>
            <Title color="primary" text="Contact" className="xyz12" />
            <StyledMaxWidthSection maxWidth={true} style={{ width: "100%" }}>
                <Section>
                    <ServiceContainer>
                        <Ring />
                    </ServiceContainer>
                    <ContactContainer />
                </Section>
            </StyledMaxWidthSection>
        </MainWrapper>
    );
};

export default ContactSection;
