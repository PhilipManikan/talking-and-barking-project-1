import React from 'react';
import Header from './header';
import InputSide from './inputside';
import ListBox from './listbox';
import Capture from './images/Capture.png'






class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            regArray: [],
            howl: false
        }
    }


    onHowlClick(dog) {

        console.log("click");

        this.setState((prevState) => {
            return {
                regArray: prevState.regArray.concat(dog),
                howl: true
            }
        })
    }

    render() {

        return (
            <div className="container">

                <img id="Capture" src={Capture} />
                <Header />
                <div className="row">

                    <div className="col-lg-6">

                        <InputSide enableHowl={this.onHowlClick.bind(this)} />

                    </div>

                    <div className="col-lg-6">

                        {this.state.howl == true
                            ?
                            <ListBox userData={this.state.regArray[0]} howl={this.state.howl} />
                            : ""
                        }
                        
                    </div>     

                </div>

            </div>
        )
    }
}


export default Container;
