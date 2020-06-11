import React, { useState } from "react";
import ClockList from "./ClockList";
import ClockInput from "./ClockInput";
import shortid from "shortid";

const ClockMain = (props) => {
    const [clockList, setClockList] = useState([
        { id: shortid.generate(), name: "Moscow", timezone: 3 },
    ]);

    const onSubmitHandler = (name, timeZone) => {
        setClockList([
            ...clockList,
            {
                id: shortid.generate(),
                name: name,
                timezone: +timeZone,
            },
        ]);
    };

    const onDeleteClockHandler = (id) => {
        setClockList([...clockList.filter((clock) => clock.id !== id)]);
    };

    return (
        <div>
            <ClockInput onSubmitHandler={onSubmitHandler} />
            <ClockList
                clockList={clockList}
                onDeleteClockHandler={onDeleteClockHandler}
            />
        </div>
    );
};

export default ClockMain;
