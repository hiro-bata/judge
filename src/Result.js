import { Component } from 'react';

class Result extends Component{

    constructor(props){
        super(props)
        this.state = {
            result: ""
        }
        this.doJudge = this.doJudge.bind(this)
    }

    doJudge(){
        const newResult = Math.floor(Math.random(this.props.value.length+1) * this.props.value.length+1)
        this.setState({
            result: "選択肢" +  newResult 
        })
    }
    

    render(){

        return(
            <div>
                <button className="btn-primary font-weight-bold" onClick={this.doJudge}>Judge</button><br/><br/><br/>
                <h1 className="font-weight-bold">結果：{this.state.result}</h1>
            </div>
        )
    }
}

export default Result