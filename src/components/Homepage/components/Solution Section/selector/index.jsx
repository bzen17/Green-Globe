import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    height: 10vh;
    position: absolute;
    z-index: 1;
    left: 25%;
    margin: 6rem 0;
    display: flex;
    width: 45%;
    align-items: center;
    justify-content: space-between;
    & .active {
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 3px 0 black;
        cursor: not-allowed;
        pointer-events: all !important;
        img {
        }
        span {
            color: rgba(211, 211, 211, 1);
            &:hover {
                text-decoration: none;
            }
        }
    }
`;

const Selector = styled.div`
    display: flex;
    cursor: pointer;

    border-radius: 50px;
    &:hover {
    }
`;

const Span = styled.span`
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #eeeeee;
    &:hover {
        text-decoration: underline;
    }
`;
const Prev = styled(Selector)`
    padding: 0.1rem 0.5rem 0.1rem 0.3rem;
    span {
        margin-left: 0.5rem;
    }
`;
const Next = styled(Selector)`
    padding: 0.1rem 0.3rem 0.1rem 0.5rem;
    span {
        margin-right: 0.5rem;
    }
`;

const Selectors = (props) => {
    const { selectFirst, setSelectFirst } = props;
    return (
        <Container selectFirst={selectFirst}>
            <Prev
                disabled={!selectFirst}
                onClick={() => setSelectFirst(true)}
                className={!selectFirst ? "" : "active"}
            >
                <img
                    src={`/assets/left${selectFirst ? "Disabled" : ""}.svg`}
                    alt="Previous"
                />
                <Span>For Cafés/Restraunts/Bars</Span>
            </Prev>
            <Next
                disabled={selectFirst}
                onClick={() => setSelectFirst(false)}
                className={selectFirst ? "" : "active"}
            >
                <Span>For You</Span>
                <img
                    src={`/assets/right${!selectFirst ? "Disabled" : ""}.svg`}
                    alt="Next"
                />
            </Next>
        </Container>
    );
};

export default Selectors;
