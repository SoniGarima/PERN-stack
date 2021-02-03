import  React,{Fragment} from "react";
import Footer from "./Footer";
class SpeakerLoginForm extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (event) =>{
        try{
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('emailsl'); 
        const passwd = data.get('passwdsl');
        console.log(email,passwd);
        const resp = await fetch(`http://localhost:5000/mender/speakers/${email}`);
        const jsonPasswd = await resp.json();
        if(jsonPasswd['password'] == passwd){
            console.log("password verified");
            const speakerid = jsonPasswd['speakerid'];
            window.location = `/speakers/${speakerid}`;
        }
        else{
            console.log("wrong password");
        }
    }
    catch(err){
        console.error(err.message);
    }
    };
    render(){return (
        <Fragment>
                    <form  style={{height:"75vh",marginLeft:"50vw",marginBottom:"2vh",marginTop:"2vh"}} onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="emailsl" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="passwdsl" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <Footer/>
                    </Fragment>
    );
    }
}
export default SpeakerLoginForm;