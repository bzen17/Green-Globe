import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

class HeaderCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeID: 0,
            wrapperStyle: {
                backgroundImage: `url('${this.props.data[0].img}')`
            },
            panelStyle: {
                background: this.props.data[0].colour
            },
            buttonHover: false,
            buttonStyle: {
                color: "#ffffff"
            }
        };
        this.slide = this.slide.bind(this);
    }
    componentWillMount() {
        document.body.classList.add("overflow-hidden");
        window.addEventListener("mousewheel", (e) => {
            this.slide(e.wheelDelta / 120);
        });
    }
    _changeActive(id) {
        this.setState({
            activeID: id,
            wrapperStyle: {
                backgroundImage: `url('${this.props.data[id].img}')`
            },
            panelStyle: {
                backgroundColor: this.props.data[id].colour
            }
        });
    }
    _buttonColour() {
        if (!this.state.buttonHover) {
            this.setState({
                buttonHover: true,
                buttonStyle: {
                    color: this.props.data[this.state.activeID].colour
                }
            });
        } else {
            this.setState({
                buttonHover: false,
                buttonStyle: {
                    color: "#ffffff"
                }
            });
        }
    }
    slide(y) {
        if (y < 0 && this.state.activeID < this.props.data.length - 1) {
            this._changeActive(this.state.activeID + 1);
        } else if (
            y > 0 &&
            this.state.activeID < this.props.data.length &&
            this.state.activeID > 0 &&
            window.scrollY === 0
        ) {
            this._changeActive(this.state.activeID - 1);
        }
        if (this.state.activeID === this.props.data.length - 1) {
            document.body.classList.remove("overflow-hidden");
        } else {
            console.log(
                this.state.activeID,
                this.props.data.length - 1,
                window.scrollY
            );
            document.body.classList.add("overflow-hidden");
        }
    }
    render() {
        return (
            <section className="wrapper" style={this.state.wrapperStyle}>
                <Selectors
                    data={this.props.data}
                    activeID={this.state.activeID}
                    _changeActive={this._changeActive.bind(this)}
                />
                <Panel
                    data={this.props.data[this.state.activeID]}
                    panelStyle={this.state.panelStyle}
                    buttonStyle={this.state.buttonStyle}
                    _buttonColour={this._buttonColour.bind(this)}
                />
            </section>
        );
    }
}
export class Panel extends React.Component {
    render() {
        return (
            <aside className="panel" style={this.props.panelStyle}>
                <h2 className="panel-header">{this.props.data.header}</h2>
                <p className="panel-info">{this.props.data.body}</p>
                <button
                    className="panel-button"
                    style={this.props.buttonStyle}
                    onMouseEnter={this.props._buttonColour}
                    onMouseLeave={this.props._buttonColour}
                >
                    Read More
                </button>
            </aside>
        );
    }
}
class Selectors extends React.Component {
    _handleClick(e) {
        if (this.props.id !== this.props.activeID) {
            this.props._changeActive(this.props.id);
        } else {
            return undefined;
        }
    }
    render() {
        return (
            <div className="selectors">
                {this.props.data.map((item) => (
                    <Selector
                        key={item.id}
                        id={item.id}
                        ref={(slider) => (this.slider = slider)}
                        _handleClick={this._handleClick}
                        _changeActive={this.props._changeActive}
                        activeID={this.props.activeID}
                    />
                ))}
            </div>
        );
    }
}
class Selector extends React.Component {
    render() {
        let componentClass = "selector";

        if (this.props.activeID === this.props.id) {
            componentClass = "selector active";
        }
        return (
            <div
                className={componentClass}
                onClick={this.props._handleClick.bind(this)}
            ></div>
        );
    }
}

export default HeaderCarousel;
