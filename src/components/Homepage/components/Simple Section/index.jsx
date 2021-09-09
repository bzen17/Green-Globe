import React, { useState, useRef, useEffect } from "react";
import { StyledDiv, StyledMaxWidthSection } from "../../../../style";
import { StyledSection, Divider } from "./styles";

const Section = (props) => {
    return (
        <StyledSection color={props.background}>
            <Divider color="primary">{props.svg ? props.svg : ""}</Divider>
            <StyledMaxWidthSection maxWidth={false}></StyledMaxWidthSection>
        </StyledSection>
    );
};

export default Section;
