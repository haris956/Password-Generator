import react from 'react';

let Hello = (props) => {
    return(
        <div>
        <p>hello {props.name}  {props.age} <div>{props.choice}</div></p>
        
         </div>
    );
}

export default Hello;