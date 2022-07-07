// Thought experiment
const parent = (
    <div>
        <p className="paragraph">This is a sample paragraph with a className of "paragraph"</p>
        <ul className="unordered-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
        <p className="paragraph2">This is another sample paragraph with a different className of "paragraph2"</p>
    </div>
)

const rootEl = document.getElementById("root")
ReactDOM.render(parent, rootEl)