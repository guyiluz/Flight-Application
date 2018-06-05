import React, { Component } from 'react'

export default class Loggin extends Component {
constructor(props){
super(props)
this.state={
    userName:"",
    password:""


}

}



HandleChange = e=> {
        
    this.setState({ [e.target.name]:e.target.value} );
    
  }



  Handlesubmit = e=> {
        

    e.preventDefault();
    
    let {userName, password}=this.state

    if(password.length==0||userName.length==0){

 alert("empthy fildes")
    
  }else if(password!=="password"&&userName!=="user"){


    alert("Worng password  or user Name ")
    
   }else{
    window.location = `${window.location.href}table`
 

   }


  }

  render() {

    const {userName,password}= this.state
    return (
      <div>
            <div className ="conitner">
       
       <div className ="loggin-Box">
   
    
        <form onSubmit={this.Handlesubmit}>
         <input type="text" placeholder="User Name" value={userName} name="userName" onChange={this.HandleChange} />
         <input type="password" placeholder="Password" value={password} name="password" onChange={this.HandleChange}/>
         <button>Login</button>
        
        </form>


       </div>
   

       </div>
      </div>
    )
  }
}
