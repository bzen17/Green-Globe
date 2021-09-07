import React, { useState, useEffect, useRef } from "react";
import {
    StyledWrapper,
    BannerImage,
    StyledBannerTextContainer,
    StyledBannerHeader,
    StyledBannerHeaderHighlight,
    StyledBannerDesc,
    StyledSectionLite,
    StyledSectionWrapper,
    StyledSectionHeader,
    HeroModule
} from "./style";
import { StyledDiv, StyledMaxWidthSection } from "../../style";
import HeaderCarousel from "./components/Header Carousel";
import ScrollingHeader, { Panel } from "./components/Scrolling Header";
import VerticalCarousel from "./components/Section Carousel";
import data1 from "./components/Scrolling Header/data.json";
import data2 from "./components/Section Carousel/data.json";

const HomePage = (props) => {
    console.log(process.env.PUBLIC_URL);
    return (
        <StyledDiv>
            <ScrollingHeader data={data1} />
            <VerticalCarousel
                data={data2.slides}
                leadingText={data2.leadingText}
            />
        </StyledDiv>
    );
};
export default HomePage;
