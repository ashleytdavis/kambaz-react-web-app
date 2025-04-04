import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div id="wd-counter-use-state">
            <h2>Counter: {count}</h2>
            <div className="flex justify-content-between">
                <button
                    className="btn btn-success me-2"
                    onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click">Up</button>
                <button
                    className="btn btn-danger"
                    onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click">Down</button>
            </div>
            <hr /></div>);
}

