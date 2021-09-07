import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EcoIcon from "@material-ui/icons/Eco";
import {
    StyledHeader,
    StyledDivContainer,
    StyledHeaderLogo,
    StyledNavButton,
    StyledMenu,
    StyledMenuItem,
    StyledButton
} from "./style";
import { StyledDiv, StyledMaxWidthSection } from "./../../style";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import WebIcon from "@material-ui/icons/Web";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const Header = (props) => {
    const history = useHistory();
    const [activePage, setActivePage] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const pushToPage = (page) => {
        setActivePage(page);
        history.push("/" + page);
    };
    return (
        <StyledHeader className="header-navv">
            <StyledMaxWidthSection maxWidth={false}>
                <StyledDivContainer className="d-flex align-items-center justify-content-between">
                    <StyledDiv
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center"
                        }}
                        onClick={() => {
                            pushToPage("");
                        }}
                    >
                        <StyledHeaderLogo
                            type="image/svg+xml"
                            aria-label="greeneerg"
                            href="/"
                        ></StyledHeaderLogo>
                    </StyledDiv>
                    <StyledDiv className="d-flex align-items-center justify-content-start">
                        <StyledNavButton
                            onClick={() => {
                                pushToPage("directory");
                            }}
                        >
                            Eco-Cafes/Restros
                        </StyledNavButton>
                        <StyledNavButton
                            onClick={() => {
                                pushToPage("about");
                            }}
                        >
                            About Us
                        </StyledNavButton>
                        <StyledNavButton
                            onClick={handleClick}
                            onMouseOver={handleClick}
                        >
                            Feed
                        </StyledNavButton>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem
                                onClick={() => {
                                    pushToPage("blogs");
                                }}
                            >
                                <ListItemIcon>
                                    <WebIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Blogs" />
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    pushToPage("news");
                                }}
                            >
                                <ListItemIcon>
                                    <LibraryBooksIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="News" />
                            </StyledMenuItem>
                            <StyledMenuItem
                                onClick={() => {
                                    pushToPage("clips");
                                }}
                            >
                                <ListItemIcon>
                                    <VideoLibraryIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Clips" />
                            </StyledMenuItem>
                        </StyledMenu>
                        <StyledButton
                            variant="contained"
                            color="secondary"
                            startIcon={<EcoIcon />}
                        >
                            LOGIN
                        </StyledButton>
                    </StyledDiv>
                </StyledDivContainer>
            </StyledMaxWidthSection>
        </StyledHeader>
    );
};

export default Header;
