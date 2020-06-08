import React, { useState } from "react";
import ClockList from "./ClockList";
import ClockInput from "./ClockInput";
import shortid from "shortid";

const ClockMain = (props) => {
    const [clockList, setClockList] = useState([
        { id: shortid.generate(), name: "Moscow", timezone: 3 },
    ]);
    const [newName, setNewName] = useState("");
    const [newTimeZone, setNewTimeZone] = useState(0);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setClockList([
            ...clockList,
            {
                id: shortid.generate(),
                name: newName,
                timezone: Number(newTimeZone),
            },
        ]);
        setNewName("");
        setNewTimeZone(0);
    };

    const onNameInputChange = (value) => {
        setNewName(value);
    };

    const onTimeZoneInputChange = (value) => {
        setNewTimeZone(value);
    };

    const onDeleteClockHandler = (id) => {
        setClockList([...clockList.filter((clock) => clock.id !== id)])
    }

    return (
        <div>
            <ClockInput
                newCity={newName}
                newTimeZone={Number(newTimeZone)}
                onSubmitHandler={onSubmitHandler}
                onNameInputChange={onNameInputChange}
                onTimeZoneInputChange={onTimeZoneInputChange}
            />
            <ClockList clockList={clockList} onDeleteClockHandler={onDeleteClockHandler} />
        </div>
    );
};

export default ClockMain;
