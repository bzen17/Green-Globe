import React from "react";
import styled from "styled-components";
import { StyledMaxWidthSection } from "../../../../style";
import { Section, ContactContainer, ServiceContainer } from "./styles";
import Title from "../../../Shared/title";

const ContactSection = (props) => {
    return (
        <div style={{ display: "flex" }}>
            <Title color="primary" text="Contact" className="xyz12" />
            <StyledMaxWidthSection maxWidth={true} style={{ width: "100%" }}>
                <Section>
                    <ServiceContainer />
                    <ContactContainer />
                </Section>
            </StyledMaxWidthSection>
        </div>
    );
};

export default ContactSection;
