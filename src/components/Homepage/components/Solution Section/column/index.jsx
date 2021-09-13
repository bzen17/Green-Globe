import React from "react";
import {
    Column,
    Card,
    CardTitle,
    CardBody,
    CardBodyFront,
    CardBodyBack
} from "./../styles";
import styled from "styled-components";

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-radius: 3.125rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

const Span = styled.span`
    font-weight: 700;
    padding: 0 1rem;
`;
const Col = (props) => {
    const { title, bodyFront, bodyBack, flow } = props;
    return (
        <>
            {flow === "column" ? (
                <Column flow="column">
                    {title.map((element, i) => {
                        return (
                            <Card>
                                <CardTitle>{title[i]}</CardTitle>
                                <CardBody>
                                    <CardBodyFront>
                                        {bodyFront[i]}
                                    </CardBodyFront>
                                    <CardBodyBack>
                                        <LinkContainer>
                                            <ActionContainer
                                                onClick={(e) => {}}
                                            >
                                                <img
                                                    src={"/assets/learn.svg"}
                                                    alt="Learn More"
                                                />
                                                <Span>Learn More</Span>
                                            </ActionContainer>
                                            <ActionContainer>
                                                <img
                                                    src={"/assets/contact.svg"}
                                                    alt="Contact Us"
                                                />
                                                <Span> Contact Us </Span>
                                            </ActionContainer>
                                        </LinkContainer>
                                    </CardBodyBack>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Column>
            ) : (
                <Column>
                    <Card>
                        <CardTitle>{title}</CardTitle>
                        <CardBody>
                            <CardBodyFront>{bodyFront}</CardBodyFront>
                            <CardBodyBack>
                                <LinkContainer>
                                    <ActionContainer onClick={(e) => {}}>
                                        <img
                                            src={"/assets/learn.svg"}
                                            alt="Learn More"
                                        />
                                        <Span>Learn More</Span>
                                    </ActionContainer>
                                    <ActionContainer>
                                        <img
                                            src={"/assets/contact.svg"}
                                            alt="Contact Us"
                                        />
                                        <Span> Contact Us </Span>
                                    </ActionContainer>
                                </LinkContainer>
                            </CardBodyBack>
                        </CardBody>
                    </Card>
                </Column>
            )}
        </>
    );
};

export default Col;
