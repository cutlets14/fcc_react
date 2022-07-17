# fcc_react
### How to get the most from this course?
1. The easy way is the hary way
   1. Learn by doing
   2. Avoid "tutorial hell"
   3. This isn't school
2. Spaced learning and repetition
   1. Don't binge the course
   2. Take breaks often and give your brain time to rest
   3. Re-watch past lessons and re-do past challenges

Learn to "think in React" -> almost like thinking in components

What we'll learn?
1. Why we care about React?
2. Proprietary React syntax called "JSX"
3. Custom components
4. How to apply CSS styling

Project 1 - Build a simple static page in React

Why React?
1. React allows us to write composable code. What does "composable" mean?
   1. Composable means to create something larger with smaller pieces.
   2. In the context of React, this means condensing custom HTML into smaller, more-specific React components which can then be used interchangeably.
   3. One can create React components as if they were a combination of JS `functions` and HTML.
2. React is also declarative!
   1. The opposite of declarative is imperative. For the former, we can tell a program what should be done. For the latter, we need to supply instructions to the program on how things should be done.
   2. For example, vanilla JS works in an imperative way. The mock example in `index.js` can quickly become cumbersome if we want to do something more complex.
   3. In a declarative sense, we get to write JS as if it were HTML.

JSX = JavaScript XML
1. A flavor of JS that is neither a string nor HTML. For example, `const element = <h1>Hello, world!</h1>;`
2. Introducing JSX to React made it so that React is more declarative rather than imperative. Said differently, using JSX with React allows one to describe what the UI should look like.
3. React doesn't require JSX, but most people find it helpful as a visual aid when working with UI inside the JS code.
4. Instead of artificially separating *technologies* by putting markup and logic in separate files, React separates *concerns* with loosely coupled units called components that contain both.

Custom components
1. Currently, JSX components are being written and saved in a JS variable before being rendered. This is a good starter approach but minimizes flexibility and composability.
2. Instead, custom components are the preferred path forward. React uses functions to create UI elements that can be re-used reliably. A function which returns React markdown elements is considered a **component**.
3. When using this convention, the function name must use PascalCase (instead of camelCase) and the function must wrapped in </> as if it were self-enclosing when called to render the component.
4. As for the parent element to wrap all the contents in a given component, one can use <div></div> or <></>, the so-called fragment tags.
5. Quick quiz
   1. What is a React component?
      1. A react component is a collection of JSX enclosed as if it were a JS function by returning React elements. This sort of abstraction allows the repeatable usage of the collection in a composable manner.

Organizing React code
1. There are many ways to re-organize code depending on the project, complexity, conventions etc.
2. If a component is being moved to its own file, the filename should be the same as the component name. Once the component has been isolated, don't forget to export the component so that it can be called in the composite script. Two ways to export: `export default function Header()` to the method signature or adding `export default Header` at the end of the script.
3. Components can be imported using `import Header from ./Header`.

Run React locally with Create React App
- In order for React apps to be understood by modern browsers, Babel alone isn't enough. In fact, Babel (used for transpiling) is often used in conjunction with Webpack (script bundler) to build websites so that browsers can understand them.
- Note that Babel and Webpack are not unique to React.
- To significantly help with the overhead associated with learning about Babel and Webpack, the React team created "Create React App" to simplify the barrier to entry.

Data-driven React
- Props - important concept in React which allows one to create reusable and composable components.
- 