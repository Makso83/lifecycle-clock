import React from "react";
import PropTypes from "prop-types";

function Clock(props) {

    const hours = props.currentTime.utcOffset(props.UTCMod).hours();
    const minutes = props.currentTime.minutes();
    const seconds = props.currentTime.seconds();


    return (
        <div className="Clock__clock-wrapper">
            <h5>{props.clockName}</h5>
            <p>
                {hours > 9 ? hours : `0${hours}`}:
                {minutes > 9 ? minutes : `0${minutes}`}:
                {seconds > 9 ? seconds : `0${seconds}`}
            </p>
        </div>
    );
}

Clock.propTypes = {
    currentTime: PropTypes.object,
    UTCMod: PropTypes.number,
    clockName: PropTypes.string,
};

export default Clock;
