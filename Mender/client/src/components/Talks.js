import  React,{Fragment} from "react";
class Talks extends React.Component{
    constructor(props){
        super(props);
        this.state = {Talks : ''};
    }
    componentDidMount(){
        this.displaytalks();
    }
    displaytalks = async () =>{
        const resp = await fetch('http://localhost:5000/mender/alltalks');
        const talks = await resp.json();
        this.setState({
            Talks: talks.map((talk) => (
                <li key={talk.talkid}>
                    <p>{talk.talkdate}</p>
                    <p>{talk.talktime}</p>
                    <p>{talk.maxentries}</p>
                    <p>{talk.bookedseats}</p>
                    <p>{talk.fee}</p>
                </li>
                ))
            });
    }
    render(){
        return(
            <Fragment>
            <ul>
                {this.state.Talks}
            </ul>
            </Fragment>
        );
    }
}
export default Talks;