// Parent-child components
const HeaderComponent = () => {
    return (
        <header>
            <nav className="nav">
                <img src="./react_logo.png" className="img"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

const FooterComponent = () => {
    return (
        <footer>
            Copyright 2022. Gadamsetty development. All rights reserved.
        </footer>
    )
}

const ContentComponent = () => {
    return (
        <div>
            <h1>
                Reasons I'm excited to learn React are: 
            </h1>
            <ul className="unordered-list">
                <li>Learning something new is fun!</li>
                <li>Learning to ensure I know the code I'm reviewing!</li>
                <li>Learning to ensure that I'm still competitive!</li>
                <li>This is really new!</li>
            </ul>
        </div>
    )
}
const Page = () => {
    return (
    <div>
        <HeaderComponent/>
        <ContentComponent/>
        <FooterComponent/>
    </div>    
    )
}

const rootEl = document.getElementById("root")
ReactDOM.render(<Page/>, rootEl)