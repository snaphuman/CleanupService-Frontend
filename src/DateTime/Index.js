import React from 'react';

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const options = { weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'}
        return (
            <div>
              <div className="clock">
                {this.state.date.toLocaleTimeString([], options)}.
              </div>
            </div>
        );
    }
}

export default DateTime;
