import React, { useState } from "react";
import { StyledMaxWidthSection } from "../../../../style";
import Title from "../../../Shared/Title";
import { Section, SectionBg } from "./styles";
import Column from "./Column";
import Selector from "./Selector";
import dataFirst from "./dataFirstSlide.json";
import dataSecond from "./dataSecondSlide.json";

const Solution = (props) => {
    const [selectFirst, setSelectFirst] = useState(true);
    return (
        <div style={{ overflow: "unset", width: "200%", display: "flex" }}>
            <Title color="s" text="Let's see how we can solve them..." />
            <Selector
                selectFirst={selectFirst}
                setSelectFirst={setSelectFirst}
            />
            <SectionBg selectFirst={selectFirst}>
                <StyledMaxWidthSection maxWidth={true}>
                    <Section>
                        {dataFirst.map((e) => {
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
                        {dataSecond.map((e) => {
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
