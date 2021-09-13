import React, { useState } from "react";
import { StyledMaxWidthSection } from "../../../../style";
import Title from "../../../Shared/title";
import { Section, SectionBg } from "./styles";
import Column from "./column";
import Selector from "./selector";
import data from "./data.json";
const Solution = (props) => {
    const [selectFirst, setSelectFirst] = useState(true);
    return (
        <div style={{ overflow: "hidden", width: "200%", display: "flex" }}>
            <Title color="s" text="Let's see how we can solve them..." />
            <Selector
                selectFirst={selectFirst}
                setSelectFirst={setSelectFirst}
            />
            <SectionBg selectFirst={selectFirst}>
                <StyledMaxWidthSection maxWidth={true}>
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
            <SectionBg selectFirst={selectFirst}>
                <StyledMaxWidthSection maxWidth={true}>
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
        </div>
    );
};

export default Solution;
