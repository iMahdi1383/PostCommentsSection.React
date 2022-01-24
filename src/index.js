import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";       // its not working
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="ALex" />
            <CommentDetail author="Jane" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
