import React from "react";
import { StyledMaxWidthSection } from "../../../../style";
import Title from "../../../Shared/title";
import { Section, Card, Column, SectionBg } from "./styles";

const Solution = (props) => {
    return (
        <SectionBg>
            <Title color="s" text="Let's see how we can solve them..." />
            <StyledMaxWidthSection>
                <Section>
                    <Column>
                        <Card />
                    </Column>
                    <Column flow="column">
                        <Card />
                        <Card />
                    </Column>
                    <Column>
                        <Card />
                    </Column>
                </Section>
            </StyledMaxWidthSection>
        </SectionBg>
    );
};

export default Solution;
