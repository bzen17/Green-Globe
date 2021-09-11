import React from "react";
import { StyledMaxWidthSection } from "../../../../style";
import Title from "../../../Shared/title";
import { Section, SectionBg } from "./styles";
import Column from "./column";
import data from "./data.json";
const Solution = (props) => {
    return (
        <SectionBg>
            <Title color="s" text="Let's see how we can solve them..." />
            <StyledMaxWidthSection>
                <Section>
                    {data.map((e) => {
                        return (
                            <Column
                                flow={e.flow}
                                title={e.title}
                                bodyFront={e.bodyFront}
                                bodyBack={e.bodyBack}
                            />
                        );
                    })}
                </Section>
            </StyledMaxWidthSection>
        </SectionBg>
    );
};

export default Solution;
