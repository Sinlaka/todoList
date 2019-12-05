import React, { useState } from 'react';

function hookExample() {
 
    useEffect(()=>{
        console.log(useState({ text: "", checked: false }))

    })
    return (
        <div>
            <p>{this.state.count}</p>
            <div><button onClick={this.clickFun}>点击增加</button></div>
        </div>);


}

export default hookExample;