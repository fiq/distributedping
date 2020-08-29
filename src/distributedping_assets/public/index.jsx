import * as ReactDOM from "react-dom";
import * as React from "react";
import distributedping from 'ic:canisters/distributedping';

export function App() {
    
    const [binary, setBinary] = React.useState(0);

    const handleClick = () => {
        distributedping.increment().then((increment) => {
            setBinary((lastBinary)=>lastBinary+increment);
        })
    };

    
    return (
        <div>
            <ul>
                <li><p><b>Base 2:</b> {binary}</p></li>
                <li><p><b>Base 10:</b> {parseInt(binary, 2)}</p></li>
            </ul>

            <button onClick={ handleClick }>Grow Binary Number</button>
        </div>
    );

};

// mounter over the dfx / canister <app>
ReactDOM.render(<App/>, document.getElementById('app'));

