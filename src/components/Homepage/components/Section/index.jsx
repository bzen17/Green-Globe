import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VerticalText } from "../../../Shared/verticalText";
import { StyledDiv, StyledMaxWidthSection } from "../../../../style";
import { StyledSection, StyledContainer, StyledHeaderTitle } from "./styles";
import * as theme from "./../../../../config/theme";
import data from "./data.json";
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

const Section = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.01,
        triggerOnce: true
    });

    return (
        <div
            style={{
                backgroundImage: `url('/assets/section-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPositionY: "center",
                backgroundPositionX: "center"
            }}
            ref={ref}
        >
            <StyledMaxWidthSection maxWidth={false}>
                <StyledHeaderTitle animate={inView}>PROBLEMS</StyledHeaderTitle>
                <StyledSection>
                    {data.map((e, i) => {
                        return (
                            <StyledContainer
                                flex="1"
                                height={`calc(11vh + ${(i + 1) * 6.5}rem)`}
                                key={i}
                                index={i}
                                animate={inView}
                            >
                                <VerticalText string={e.string} />
                            </StyledContainer>
                        );
                    })}
                </StyledSection>
            </StyledMaxWidthSection>
        </div>
    );
};

export default Section;
