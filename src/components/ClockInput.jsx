import React, { useRef } from "react";
import PropTypes from "prop-types";

function ClockInput(props) {
    const {
        newCity,
        newTimeZone,
        onSubmitHandler,
        onNameInputChange,
        onTimeZoneInputChange,
    } = props;

    const nameInput = useRef();
    const timeZoneInput = useRef();

    return (
        <div>
            <form
                onSubmit={onSubmitHandler}
                className="ClockInput__form_grid-wrapper">
                <input
                    type="text"
                    id="clockName"
                    value={newCity}
                    ref={nameInput}
                    onChange={() => onNameInputChange(nameInput.current.value)}
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
                    value={newTimeZone}
                    id="timezone"
                    onChange={() =>
                        onTimeZoneInputChange(timeZoneInput.current.value)
                    }
                    className="ClockInput__form__inputtimezone"
                />
                <label htmlFor="timezone" className="ClockInput__form__labeltimezone">Временная зона</label>
                <input type="submit" value="Добавить"  className="ClockInput__form__submit" />
            </form>
        </div>
    );
}

ClockInput.propTypes = {
    newCity: PropTypes.string,
    newTimeZone: PropTypes.number,
    onSubmitHandler: PropTypes.func,
    onNameInputChange: PropTypes.func,
    onTimeZoneInputChange: PropTypes.func,
};

export default ClockInput;
