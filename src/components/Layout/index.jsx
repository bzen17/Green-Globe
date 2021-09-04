import React, { useEffect, useState } from "react";
import Header from "../Header";
import Arrowtotop from "../Shared/arrowToTop";

const Layout = (props) => {
    const handleScroll = (e) => {
        if (window.scrollY > 800) {
            setNavigateToTop(true);
        } else {
            setNavigateToTop(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    const [navigateToTop, setNavigateToTop] = useState(false);
    return (
        <div
            className="d-flex flex-column  justify-content-between"
            style={{ minHeight: "100vh" }}
        >
            <>
                <Header />
                {props.children}
                <Arrowtotop navigateToTop={navigateToTop} />
            </>
        </div>
    );
};

export default Layout;
