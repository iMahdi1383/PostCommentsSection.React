import React from "react";
import ReactDOM from "react-dom";
// import faker from "faker";       // its not working

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    {/* use this instead of 'faker.image.avatar()' */}
                    <img alt="avatar" src="https://i.pravatar.cc/150" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Mahdi
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
