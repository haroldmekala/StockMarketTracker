import React, { Component } from 'react'; 
import {iex} from '../config/iex.js';
class StockRow extends Component {

constructor(props){
    super (props)
this.state = {
    data: {}
    }
}

componentDidMount() {
    //query the API
    const url2 = `${iex.base_url}/core/${this.props.ticker}/intraday_prices/token=${iex.api_token}`
    console.log("url2 = " + url2)
    const url1 = "https://api.iex.cloud/v1/data/core/intraday_prices/spy?range=1d&token=pk_0c730bfd08784eacb6c3c9c17916ad57"
    console.log("url1 = " + url1)
    fetch(url1)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)e
        this.setState ({
            data:data[data.length - 1]
        })
     })
}

 
render () {
    return (
    <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.open}</td>
        <td>{this.state.data.date}</td>
        <td>{this.state.data.time}</td>
    </tr>
    )
    }
}


export default StockRow;