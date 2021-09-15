import React from "react";
import { Column, TitleWrapper, Title, Wrapper } from "../styles";
import Card from "./Card";
import data from "./data.json";

const Ring = (props) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Everything that we offer...</Title>
            </TitleWrapper>
            <Column>
                {data.map((el) => {
                    return <Card text={el.service} />;
                })}
            </Column>
        </Wrapper>
    );
};

export default Ring;
