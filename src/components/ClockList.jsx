import React from "react";
import moment from "moment";
import Clock from "./Clock";

export default class ClockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().utc(),
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: moment().utc() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval();
    }

    render() {
        return (
            <div className="ClockList__wrapper">
                {this.props.clockList.map((clock) => (
                    <Clock
                        key={clock.id}
                        id={clock.id}
                        currentTime={this.state.date}
                        clockName={clock.name}
                        UTCMod={Number(clock.timezone)}
                        onDeleteClockHandler={this.props.onDeleteClockHandler}
                    />
                ))}
            </div>
        );
    }
}
