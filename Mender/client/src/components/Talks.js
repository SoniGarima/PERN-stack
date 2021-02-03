import  React,{Fragment} from "react";
class Talks extends React.Component{
    constructor(props){
        super(props);
        this.state = {Talks : ''};
        this.userid = this.props.match.params.userid;
    }
    componentDidMount(){
        this.displaytalks();
    }
    bookTalk = async (id) =>{
        const reg = await fetch(`http://localhost:5000/mender/registeredtalks/${this.userid}`);
        const regtalks = await reg.json();
        const resp1 = await fetch('http://localhost:5000/mender/alltalks');
        const talks1 = await resp1.json();
        var flag=true;
        for(var i=0;i<regtalks.length;i++){
            if(regtalks[i].talkid == id){
                flag=false;
            }
        }
        for(var i =0;i<talks1.length;i++){
            if(talks1[i].maxentries == talks1[i].bookedseats){
                flag=false;
            }
        }
        if(flag){
        const bookt = await fetch(`http://localhost:5000/mender/${this.userid}/registertalk/${id}`,{
            method:'POST',
            headers: { "Content-Type": "application/json" }
        })}
    }
    displaytalks = async () =>{
        const resp = await fetch('http://localhost:5000/mender/alltalks');
        const talks = await resp.json();
        this.setState({
            Talks: talks.map((talk) => (
                <li class="list-group-item" key={talk.talkid}>
                    <p>{talk.talktitle}</p>
                    <p>{talk.talkdesc}</p>
                    <p>Date : {talk.talkdate}    Time : {talk.talktime}</p>
                    <p>Maximum Entries Allowed :{talk.maxentries}</p>
                    <p>Booked Seats :{talk.bookedseats}</p>
                    <p>Fee :{talk.fee}</p>
                    <button onClick={this.bookTalk(talk.talkid)}>register</button>
                </li>
                ))
            });
    }
    render(){
        return(
            <Fragment>
            <ul class="list-group">
                {this.state.Talks}
            </ul>
            </Fragment>
        );
    }
}
export default Talks;