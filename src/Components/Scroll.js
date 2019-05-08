import React from 'react'

const Scroll = ({ children }) => {
    return (
        // console.log(props.children)
        <div style={{ overflow: 'scroll', border: '3px solid black', height: '800px'}}>
            {/* <h2> Hi, children <h2> */}
            { children }
        </div>
    );
}

export default Scroll
