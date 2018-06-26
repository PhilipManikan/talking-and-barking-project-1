import React from 'react';
import Header from './header';
import Calendar from 'react-calendar'



class InputSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dog: '',
            size: '',
            dogPark: 'Namek Dog Park',
            location: '',
            walkTime: '',
            walkDate: '',
        }
    }

    onHowl() {
        this.props.enableHowl(this.state);

        this.setState({
            name: '',
            dog: '',
            size: '',
            location: '',
            walkTime: '',
            walkDate: ''
        })
    }


    smallButton() {
        this.setState({
            size: "small"
        });
    }

    midButton() {
        this.setState({
            size: "medium"
        });
    }

    largeButton() {
        this.setState({
            size: "large"
        });
    }


    render() {
        return (
            <div>
                <Header id="signup" header="Sign up" />

                <div className="form-group">

                    <p>Your Name</p>
                    <input type="text" className="form-control" value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
               
                </div>

                <div className="form-group">

                    <p>Dog's Name</p>
                    <input type="text" className="form-control" value={this.state.dog} onChange={(event) => { this.setState({ dog: event.target.value }) }} />

                </div>

                <div className="form-group">
                    <div className="col-xs-12">
                        <div className="button-right">
                            <p>My Dog Size</p>

                            <button type="select" className="btn btn-primary btn-lg form-control col-md-4 size" onClick={this.smallButton.bind(this)}>Small </button>
                            <button type="select" className="btn btn-primary btn-lg form-control col-md-4 size" onClick={this.midButton.bind(this)}>Medium</button>
                            <button type="button" className="btn btn-primary btn-lg form-control col-md-4 size" onClick={this.largeButton.bind(this)}>Large</button>

                        </div>
                    </div>
                </div>

                <div className="form-group">

                    <p>Time and Date </p>

                    <input type="time" align="left" className="form-control col-md-6 float-left" value={this.state.walkTime} onChange={(event) => { this.setState({ walkTime: event.target.value }) }} />
                    <input type="date" className="form-control col-md-6 float-right"  value={this.state.walkDate} onChange={(event) => { this.setState({ walkDate: event.target.value }) }} />

                </div>


                <div className="form-group">

                    <p>Location</p>
                    <input type="text" className="form-control" placeholder="Zip Code or Address" value={this.state.location} onChange={(event) => { this.setState({ location: event.target.value }) }} />

                </div>

                <button className="btn btn-primary btn-lg btn-block" id="go" onClick={this.onHowl.bind(this)}> Howl! </button>
            
            </div >
        )
    }
}

export default InputSide;