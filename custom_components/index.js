// Thought experiment with custom components
// function TemporaryComponent() {
//     <div>
//         <img src="./react_logo.png" id="react-logo" width="40px"></img>
//         <h1 className="header-one">Fun facts about React</h1>
//         <ul className="unordered-list">
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// }

// Using arrow notation
// const TemporaryComponent = () => {
//     <div>
//         <img src="./react_logo.png" id="react-logo" width="40px"></img>
//         <h1 className="header-one">Fun facts about React</h1>
//         <ul className="unordered-list">
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// }

// Yet another challenge
const ReasonsForReact = () => {
    return (
        <div>
            <ul className="unordered-list">
                <li>Learning something new is fun!</li>
                <li>Learning to ensure I know the code I'm reviewing!</li>
                <li>Learning to ensure that I'm still competitive!</li>
            </ul>
        </div>
    )
}

const rootEl = document.getElementById("root")
ReactDOM.render(<ReasonsForReact/>, rootEl)