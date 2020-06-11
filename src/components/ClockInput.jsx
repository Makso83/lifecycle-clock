import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function ClockInput(props) {
    const [name, setName] = useState("");
    const [timeZone, setTimeZone] = useState(0);

    const nameInput = useRef();
    const timeZoneInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitHandler(name, timeZone);
        setName("");
        setTimeZone(0);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="ClockInput__form_grid-wrapper">
                <input
                    type="text"
                    id="clockName"
                    value={name}
                    ref={nameInput}
                    onChange={() => setName(nameInput.current.value)}
                    className="ClockInput__form__inputclockname"
                />
                <label
                    htmlFor="clockName"
                    className="ClockInput__form__labelclockname">
                    Название
                </label>
                <input
                    type="number"
                    ref={timeZoneInput}
                    value={timeZone}
                    id="timezone"
                    onChange={() => setTimeZone(timeZoneInput.current.value)}
                    className="ClockInput__form__inputtimezone"
                />
                <label
                    htmlFor="timezone"
                    className="ClockInput__form__labeltimezone">
                    Временная зона
                </label>
                <input
                    type="submit"
                    value="Добавить"
                    className="ClockInput__form__submit"
                />
            </form>
        </div>
    );
}

ClockInput.propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
};

export default ClockInput;
