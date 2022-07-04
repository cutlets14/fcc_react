// The broken snippet below was written in response to this warning 'Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.'
// import {createRoot} from 'react-dom/client';
// const rootContainer = document.getElementById("root")
// const root = createRoot(rootContainer) // if using Typescript, use createRoot(container!); ! is the non-null assertion operator aka there is no chance that the container element doesn't exist
// root.render(<h1>Hello, everyone!</h1>);

// What was shown in the screencast: ReactDOM.render(element, container); render a React element into the DOM in the supplied container.
// First arg is the "what" that needs to be rendered and the second arg is the "where" it needs to be rendered.
const root = document.getElementById("root");
const unEl = document.getElementById("unList");
ReactDOM.render(<ul><li>This is the first item</li><li>This is the second item</li></ul>, root)