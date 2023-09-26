import React, { Component } from 'react'; 

class StockRow extends Component {

constructor(props){
    super (props)
this.state = {
    price: 5,
    date: '12-12-12',
    time: '09:45'
}
}
render (){
    return (
    <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.price}</td>
        <td>{this.state.date}</td>
        <td>{this.state.time}</td>
    </tr>
    )
}
}

export default StockRow;