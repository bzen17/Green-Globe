import React, { useState, useEffect, useRef } from "react";

import { StyledDiv, StyledMaxWidthSection } from "../../style";
import ScrollingHeader from "./components/Scrolling Header";
import Section from "./components/Section";
import SimpleSection from "./components/Simple Section";
import VerticalCarousel from "./components/Section Carousel";
import SolutionSection from "./components/Solution Section";
import data1 from "./components/Scrolling Header/data.json";
import data2 from "./components/Section Carousel/data.json";
import Quote from "../Shared/quotes";
const HomePage = (props) => {
    console.log(window.pageYOffset);
    return (
        <StyledDiv>
            <ScrollingHeader data={data1} />
            <Quote
                color="secondary"
                text="Together, we can bring our planet's heartbeat back."
            />
            <SolutionSection></SolutionSection>
            <Quote color="primary" text="Teamwork begins by building trust." />
            {/**<Section />
            <VerticalCarousel
                data={data2.slides}
                leadingText={data2.leadingText}
            />**/}
        </StyledDiv>
    );
};
export default HomePage;
