import {Component} from "react"
import {Link} from "react-router-dom"

import "./index.css"
class Login extends Component{
    state={
        userName:""
    }
    newName=event=>{
        this.setState({
            userName:event.target.value
        })
    }

    submitForm=event=>{
        event.preventDefault();
        const {userName}=this.state
        console.log(userName)
        localStorage.setItem("name",userName)
        
    }


    render(){
        const {userName}=this.state
        console.log(userName)
        return(

            <div className="main">
                <h1>React Tiles</h1>
                <form className="forms" onSubmit={this.submitForm}>
                    <h1>Enter your name</h1>
                    <input type="text" className="input" onChange={this.newName}/>
                    <div>
                    <button type="submit" className="playButton" >I'm in</button> 
                    <Link to="/">
                    <button type="submit" className="playButton" >Play</button> </Link>
                    </div>
                   
                    
                </form>
            </div>

        )
    }
}
export default Login