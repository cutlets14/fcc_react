// Thought experiment
const parent = (
    <div>
        <img src="./react_logo.png" id="react-logo" width="40px"></img>
        <h1 className="header-one">Fun facts about React</h1>
        <ul className="unordered-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const rootEl = document.getElementById("root")
ReactDOM.render(parent, rootEl)