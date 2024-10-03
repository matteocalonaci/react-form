import { useState, useEffect } from "react";

function TitleCount () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log("ciao da use effect")
        }, [count]);

        return (
            <div>
                <p>Count: {count}</p>
                <button className="p-2 mt-2 rounded-2xl bg-pink-800 border-2" onClick={() => setCount(count + 1)}>Click me</button>
                </div>

        )

}
export default TitleCount;