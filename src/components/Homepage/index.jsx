import React, { useState, useEffect, useRef } from "react";

import { StyledDiv, StyledMaxWidthSection } from "../../style";
import ScrollingHeader from "./components/ScrollingHeader";
import Section from "./components/Section";
import SimpleSection from "./components/SimpleSection";
import VerticalCarousel from "./components/SectionCarousel";
import SolutionSection from "./components/SolutionSection";
import ContactSection from "./components/ContactSection";
import data1 from "./components/ScrollingHeader/data.json";
import data2 from "./components/SectionCarousel/data.json";
import Quote from "../Shared/Quotes";
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
            <ContactSection />
            <Quote
                color="secondary"
                text="It is in your hands to create a better world for all who live in it."
            />
            {/**<Section />
            <VerticalCarousel
                data={data2.slides}
                leadingText={data2.leadingText}
            />**/}
        </StyledDiv>
    );
};
export default HomePage;
