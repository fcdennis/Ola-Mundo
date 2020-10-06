const foo = document.querySelector(".foo")
const bar = document.querySelector(".bar")

const react1 = (
    <h1>This is the title of the test</h1>
);
const react2 = (
    <article>
        <p>This is the first paragraph of the test.</p>
        <p>It seems that everything is working properly</p>
        <ul>
            <li>First test aproved!</li>
            <li>Second test aproved!</li>
            <li>Everything is working properly!</li>
        </ul>
    </article>
);

ReactDOM.render(react1, foo);
ReactDOM.render(react2, bar);
