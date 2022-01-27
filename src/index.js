import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";       // its not working
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="2 minutes ago"
                content="Nice blog post!"
                image="https://i.pravatar.cc/50"
            />
            <CommentDetail
                author="ALex"
                timeAgo="Today, 14:45"
                content="This is some example text for a comment."
                image="https://i.pravatar.cc/45"
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday, 21:00"
                content="Hello World!"
                image="https://i.pravatar.cc/55"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
