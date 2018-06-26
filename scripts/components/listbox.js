import React from 'react';
import Header from './header';


class ListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogArray: [
                {
                    name: 'Pedro',
                    dog: 'Bruno',
                    size: 'Small',
                    dogPark: 'Albuquerque Dog Park',
                    walkTime: '1',
                    walkDate: '1'
                },
                {
                    name: 'Bart',
                    dog: 'Tender',
                    size: 'Large',
                    dogPark: 'Liquor Dog Park',
                    walkTime: '1',
                    walkDate: '1'
                },
                {
                    name: 'Jimmy',
                    dog: 'Fallon',
                    size: 'Medium',
                    dogPark: 'Hollywood Dog Park',
                    walkTime: '1',
                    walkDate: '1'
                },
                {
                    name: 'Jack',
                    dog: 'Black',
                    size: 'Large',
                    dogPark: 'Stanton Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Facundo',
                    dog: 'Bert',
                    size: 'Small',
                    dogPark: 'Beverly Hills Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'George',
                    dog: 'Sadie',
                    size: 'Large',
                    dogPark: 'Los Angeles Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Kimberly',
                    dog: 'Pinkie',
                    size: 'Large',
                    dogPark: 'Cerritos Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Piccolo',
                    dog: 'Dende',
                    size: 'Small',
                    dogPark: 'Namek Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Goku',
                    dog: 'Bruno',
                    size: 'Small',
                    dogPark: 'Albuquerque Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Bruno',
                    dog: 'Mars',
                    size: 'Small',
                    dogPark: 'Pande Coco Dog Park',
                    walkTime: '',
                    walkDate: ''
                },
                {
                    name: 'Juanita',
                    dog: 'Padrino',
                    size: 'Large',
                    dogPark: 'Irvine Dog Park',
                    walkTime: '',
                    walkDate: ''

                },
                {
                    name: 'Conchita',
                    dog: 'Quezo',
                    size: 'Large',
                    dogPark: 'Tijuana Dog Park',
                    walkTime: '',
                    walkDate: ''
                }
            ]

        }

    }

    componentDidMount() {
        var userDate = this.props.userData.walkDate;
        var userTime = this.props.userData.walkTime;

        let newDogArray = [...this.state.dogArray];

        newDogArray.forEach(function (item) {
            item.walkDate = userDate;
            item.walkTime = userTime;
        })

        this.setState({
            dogArray: newDogArray
        })

    }

    setRadio(event) {
        console.log(event.target.value);
    }

    onNext() {
        console.log("What you doin")
    }

    render() {

        return (
            <div>

                <Header header="Available" />
                <div className="border border-secondary rounded" id="borderlist">
                    <div className="container" id="listresult">

                        <div className="row">

                            {
                                this.state.dogArray.map((item, i) => {
                                    return (
                                        <label key={i} className="col-lg-9">

                                            <div onChange={this.setRadio.bind(this)} id="dogArray">

                                                <input type="radio" value="choice" name="woofit" />

                                                <span key={i}>  {item.name}{'   '}{item.dog}{'  '}{item.size}{'  '}
                                                {item.dogPark}{'  '}{item.walkTime}{' '}{item.walkDate} </span>

                                            </div>

                                        </label>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn btn-secondary active bottom footer" id="pageprevious" onClick={() => { if (window.confirm('no no no. sorry not workin')) this.onNext() }}>Previous</button>
                    <button className="btn btn-secondary active bottom" id="pagenext" onClick={() => { if (window.confirm('no no no. sorry no next')) this.onNext() }} >Next</button>
                </div>

                <div>
                    <a href="http://localhost:8000/webpack-dev-server/"><button type="button" className="btn btn-primary btn-lg btn-block footer" id="go">Woof it!</button></a>
                </div>
            </div >
        )
    }
}

export default ListBox;