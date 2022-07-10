// Parent-child components
// Results in error: Uncaught ReferenceError: require is not defined
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

const App = () => {
    return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>    
    )
}

const rootEl = document.getElementById("root")
ReactDOM.render(<App/>, rootEl)