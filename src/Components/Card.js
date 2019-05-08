import React from 'react'
import './Card.css'


const Card = ( { name, email, id } ) => {
    // const { name, email, id } = props;       // destructiring props
    return (
        <div className="br3 ba grow dib bw1 bg-light-blue shadow-3 tc ma2 pa2">
            <img src={ `https://robohash.org/${ id }?size=200x200` } alt='robot'/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}


// class Hello extends Component {
//     render() {
//         return (
//             <div className="f1 tc">
//                 <h1>Welcom to React</h1>
//                 <p>{ this.props.greeting }</p>
//             </div>
//         );
//     }
// }

export default Card