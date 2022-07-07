// The broken snippet below was written in response to this warning 'Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.'
// import {createRoot} from 'react-dom/client';
// const rootContainer = document.getElementById("root")
// const root = createRoot(rootContainer) // if using Typescript, use createRoot(container!); ! is the non-null assertion operator aka there is no chance that the container element doesn't exist
// root.render(<h1>Hello, everyone!</h1>);

// First custom React component
function MainContent() {
    return (
        <h1>Hello, World! I am learning React!</h1>
    )
}

// Second custom React component
function ListContent() {
    return (
        <ul>
            <li>This is the first item</li>
            <li>This is the second item</li>
        </ul>
    )
}

// What was shown in the screencast: ReactDOM.render(element, container); render a React element into the DOM in the supplied container.
// First arg is the "what" that needs to be rendered and the second arg is the "where" it needs to be rendered.
const root = document.getElementById("root");
// ReactDOM.render(
// <div>
//     <MainContent/>
//     <ListContent/>
// </div>, 
// root)

// Showcasing the imperative nature of JS
const newHOne = document.createElement("h1");
newHOne.textContent = "Some inner text."
newHOne.className = "header"
document.getElementById("root").append(newHOne)
console.log(newHOne) //<h1 class="header">Some inner text.</h1>

// An intro to JSX
// Recall that JSX is essentially a declarative way of writing JS with HTML embedded inside.const HOneEl = <h1 className="header">This is JSX</h1>
// const parent = (
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
// </div>
// )

// console.log(parent) 
// One gets back an array of children in the "props" key i.e. a child for every element within the parent element (div)

// Example navbar without any styling
const parentNav = (
    <nav>
        <h1>Cutlets</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
console.log(parentNav)

ReactDOM.render(parentNav, root)