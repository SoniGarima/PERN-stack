import {Fragment, useState} from "react";
import React from "react";
import "./style.css";
import Footer from "./Footer";
class CounselorSignUpForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (event) =>{
        try{
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data); // reference by form input's `name` tag
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        console.log(JSON.stringify(object));
        const resp = await fetch('http://localhost:5000/mender/counselors',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        });
        console.log(resp);
        window.location = "/counselor-login";
    }
    catch(err){
        console.error(err.message);
    }
    };
    
    render(){return (
        <Fragment>
                    <form style={{marginLeft:"50vw",marginBottom:"2vh",marginTop:"2vh"}} onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" class="form-control" name="namecs" placeholder="FirstName LastName"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="emailcs" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" name="usernamecs" placeholder="Username"/>
                        </div>
                        <div class="form-group">
                            <label>Age</label>
                            <input type="number" class="form-control" name="agecs" placeholder="Age in years"/>
                        </div>
                        <div class="form-control">
                            <label>Gender</label><br/>
                            <input type="radio"  name="gendercs" value="male"/>
                            <label for="male">Male</label><br/>
                            <input type="radio"  name="gendercs" value="female"/>
                            <label for="female">Female</label><br/>
                            <input type="radio"  name="gendercs" value="transgender"/>
                            <label for="other">Transgender</label><br/>
                            <input type="radio"  name="gendercs" value="other"/>
                            <label for="other">Prefer not to say</label><br/>
                        </div>
                        <div>
                            <label>Bank Account Number</label>
                            <input type="text" class="form-control" name="bankcs" placeholder="XXXXXXXXXXXX"/>
                        </div>
                        <div>
                            <label>IFSC Code</label>
                            <input type="text" class="form-control" name="ifsccs" placeholder="say SBINXXXXX"/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="text" class="form-control" name="phonecs" placeholder="XXXXXXXXXX"/>
                        </div>
                        <div>
                            <label>Whatsapp Number</label>
                            <input type="text" class="form-control" name="phonewtspcs" placeholder="XXXXXXXXXX"/>
                        </div>
                        <div>
                            <label>Fee(Lumpsum) per session</label>
                            <input type="number" class="form-control" name="feecs" placeholder="per session"/>
                        </div>
                        <div>
                            <label>You have Bechalors degree in:</label>
                            <input type="text" class="form-control" name="bdegreecs" placeholder="exp - Psychology"/>
                        </div>
                        <div>
                            <label>You have Masters degree in:</label>
                            <input type="text" class="form-control" name="mdegreecs" placeholder="exp - Psychology"/>
                        </div>
                        <div>
                            <label>How many extra courses have you done in psychology?</label>
                            <input type="number" class="form-control" name="coursecs" placeholder="0 or above"/>
                        </div>
                        <div>
                            <label>How many years of experience do you have?</label>
                            <input type="number" class="form-control" name="yoecs" placeholder="0 or above"/>
                        </div>
                        <div>
                            <label>Link to you website/Linkedin/Twitter</label>
                            <input type="text" class="form-control" name="portfoliocs" placeholder="www.example.com"/>
                        </div>
                        <div class="form-control">
                            <label>Choose your first priority among all:</label><br/>
                            <input type="radio"  name="pr1cs" value="A"/>
                            <label for="A">Cognitive-Behavioral Therapy (CBT)</label><br/>
                            <input type="radio"  name="pr1cs" value="B"/>
                            <label for="B">Behavioral Therapy</label><br/>
                            <input type="radio"  name="pr1cs" value="C"/>
                            <label for="C">Dialectical Behavior Therapy (DBT)</label><br/>
                            <input type="radio"  name="pr1cs" value="D"/>
                            <label for="D">Humanistic Therapy</label><br/>
                        </div>
                        <div class="form-control">
                            <label>Choose your Second priority among all:</label><br/>
                            <input type="radio"  name="pr2cs" value="A"/>
                            <label for="A">Cognitive-Behavioral Therapy (CBT)</label><br/>
                            <input type="radio"  name="pr2cs" value="B"/>
                            <label for="B">Behavioral Therapy</label><br/>
                            <input type="radio"  name="pr2cs" value="C"/>
                            <label for="C">Dialectical Behavior Therapy (DBT)</label><br/>
                            <input type="radio"  name="pr2cs" value="D"/>
                            <label for="D">Humanistic Therapy</label><br/>
                        </div>
                        <div class="form-control">
                            <label>Choose your third priority among all:</label><br/>
                            <input type="radio"  name="pr3cs" value="A"/>
                            <label for="A">Cognitive-Behavioral Therapy (CBT)</label><br/>
                            <input type="radio"  name="pr3cs" value="B"/>
                            <label for="B">Behavioral Therapy</label><br/>
                            <input type="radio"  name="pr3cs" value="C"/>
                            <label for="C">Dialectical Behavior Therapy (DBT)</label><br/>
                            <input type="radio"  name="pr3cs" value="D"/>
                            <label for="D">Humanistic Therapy</label><br/>
                        </div>
                        <div class="form-control">
                            <label>Choose your forth priority among all:</label><br/>
                            <input type="radio"  name="pr4cs" value="A"/>
                            <label for="A">Cognitive-Behavioral Therapy (CBT)</label><br/>
                            <input type="radio"  name="pr4cs" value="B"/>
                            <label for="B">Behavioral Therapy</label><br/>
                            <input type="radio"  name="pr4cs" value="C"/>
                            <label for="C">Dialectical Behavior Therapy (DBT)</label><br/>
                            <input type="radio"  name="pr4cs" value="D"/>
                            <label for="D">Humanistic Therapy</label><br/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="passwdcs" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <Footer/>
        </Fragment>
    );
    }
}


export default CounselorSignUpForm;