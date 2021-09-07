import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VerticalText } from "../../../Shared/verticalText";
import { StyledDiv, StyledMaxWidthSection } from "../../../../style";
import { StyledSection, StyledContainer, View, Text } from "./styles";
import * as theme from "./../../../../config/theme";
import data from "./data.json";
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

const Section = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.05,
        triggerOnce: true
    });

    return (
        <StyledSection ref={ref}>
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
    );
};

export default Section;
