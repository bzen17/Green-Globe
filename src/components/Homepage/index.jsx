import React, { useState, useEffect, useRef } from "react";

import { StyledDiv, StyledMaxWidthSection } from "../../style";
import ScrollingHeader from "./components/Scrolling Header";
import Section from "./components/Section";
import VerticalCarousel from "./components/Section Carousel";
import data1 from "./components/Scrolling Header/data.json";
import data2 from "./components/Section Carousel/data.json";

const HomePage = (props) => {
    console.log(window.pageYOffset);
    return (
        <StyledDiv>
            <ScrollingHeader data={data1} />
            <Section />
            <VerticalCarousel
                data={data2.slides}
                leadingText={data2.leadingText}
            />
        </StyledDiv>
    );
};
export default HomePage;
