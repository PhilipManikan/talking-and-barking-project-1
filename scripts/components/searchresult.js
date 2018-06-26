import React from 'react';



class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogArray: [
        {
          name: 'Pedro',
          dog: 'Bruno',
          size: 'small',
          dogPark: 'Albuquerque Dog Park',
          time: "",
          date:""

        },
        {
          name: 'Bart',
          dog: 'Tender',
          size: 'large',
          dogPark: 'Liquor Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Jimmy',
          dog: 'Fallon',
          size: 'medium',
          dogPark: 'Hollywood Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Jack',
          dog: 'Black',
          size: 'large',
          dogPark: 'Stanton Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Facundo',
          dog: 'Bert',
          size: 'small',
          dogPark: 'Beverly Hills Dog Park',
          time: "",
          date:""
        },

        {
          name: 'George',
          dog: 'Sadie',
          size: 'large',
          dogPark: 'Los Angeles Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Kimberly',
          dog: 'Pinkie',
          size: 'large',
          dogPark: 'Cerritos Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Piccolo',
          dog: 'Dende',
          size: 'small',
          dogPark: 'Namek Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Goku',
          dog: 'Bruno',
          size: 'small',
          dogPark: 'Albuquerque Dog Park',
          time: "",
          date:""
        },

        {
          name: 'Pedro',
          dog: 'Bruno',
          size: 'small',
          dogPark: 'Albuquerque Dog Park',
          time: "",
          date:""

        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.state.dogArray.map((item, i) => {
              return (
                <label key={i} className="col-lg-9">
                  <li key={i}>{item.name}~{item.dog}~{item.size}~{item.dogPark}</li>
                </label>
              )
            })
          }
        </div>
      </div>
    )

  }
}


export default Search;