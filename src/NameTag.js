import React, {Component} from 'react';

class NameTag extends Component{
    state = {
        name:'inital name'
    }
    //이벤트핸들러 함수
    changeName = () => {
        this.setState({name:'changed name'})
        //this.state.name = 'changed name'
    }
    render(){
        console.log('NameTag')
        const{name} = this.state
        return(
            <>
               <h1>{name}</h1>
               <button type="button" onClick={this.changeName}>change name</button>
            </>
        )
    }
}

export default NameTag;