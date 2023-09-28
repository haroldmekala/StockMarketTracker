import React, { Component } from 'react'; 
class StockRow extends Component {

constructor(props){
    super (props)
this.state = {
    data: {}
    }
}

componentDidMount(){
    //query the API
    this.setState({
    data:{
        price:100.00,
        date: '00-00-00',
        time: '00:00'
    }
    })
}
  
render (){
    return (
    <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.price}</td>
        <td>{this.state.data.date}</td>
        <td>{this.state.data.time}</td>
    </tr>
    )
}
}

export default StockRow;