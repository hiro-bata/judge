import { Component } from 'react';

class Item extends Component{

    render(){
        return(
            <div>
                <tr>
                <span>選択肢{this.props.value.number}:</span><td>{this.props.value.message}</td>
                </tr>
            </div>
        )
    }
}

export default Item