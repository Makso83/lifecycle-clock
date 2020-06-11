import React from "react";
import PropTypes from "prop-types";

function Clock(props) {
    const hours = props.currentTime.utcOffset(props.UTCMod).hours();
    const minutes = props.currentTime.minutes();
    const seconds = props.currentTime.seconds();
    const hourStyle = {
        transform: `rotate(${30 * hours + (1 / 60) * minutes}deg)`,
    };

    const minuteStyle = {
        transform: `rotate(${6 * minutes + (1 / 60) * seconds}deg)`,
    };

    const secondsStyle = {
        transform: `rotate(${6 * seconds}deg)`,
    };

    return (
        <div className="Clock__clock-container">
            <div className="Clock__clock-wrapper">
                <h5>{props.clockName}</h5>
                <div className="Clock__hour-arrow" style={hourStyle}></div>
                <div className="Clock__minute-arrow" style={minuteStyle}></div>
                <div className="Clock__second-arrow" style={secondsStyle}></div>
                <div className="Clock__center-circle"></div>
                <button
                    className="Clock__delete-button"
                    onClick={() => props.onDeleteClockHandler(props.id)}>
                    X
                </button>
            </div>
            <p>{`${hours > 9 ? hours : "0" + hours}:${
                minutes > 9 ? minutes : "0" + minutes
            }:${seconds > 9 ? seconds : "0" + seconds}`}</p>
        </div>
    );
}

Clock.propTypes = {
    currentTime: PropTypes.object,
    UTCMod: PropTypes.number,
    clockName: PropTypes.string,
};

export default Clock;
