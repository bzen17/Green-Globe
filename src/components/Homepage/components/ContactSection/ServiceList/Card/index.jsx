import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, Circle, Text } from "../../styles";
import "./index.css";
const ServiceCard = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <Card ref={ref}>
            <Circle>
                {inView ? (
                    <svg
                        class="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            class="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            class="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                ) : (
                    ""
                )}
            </Circle>
            {inView ? <Text className="pulsate-11">{props.text}</Text> : ""}
        </Card>
    );
};

export default ServiceCard;
