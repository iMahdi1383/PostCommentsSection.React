# Modern React & Redux

&nbsp;

---

## Use React

#### 1-11 : 'src/index.js' file :

```jsx
// Import the React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";

// Create a react component.
const App = () => {
    return <div> Hi there! </div>; // Functional Component
};

// Take the react component and show it on the screen.
ReactDOM.render(<App />, document.querySelector("#root"));
```

\
&nbsp;

---

## JSX

#### 2-2 : Convert Html into JSX

-   class :

    ```jsx
    <p class="a"> Html </p>
    <p className="a"> JSX </p>
    ```

-   inline style :
    ```jsx
    <p style="color: red; text-align: center;"> Html </p>
    <p style={{ color: 'red', text-align: 'center' }}> JSX </p>
    ```
-   label for :
    ```jsx
    <label for="name"> Html </label>
    <label htmlFor="name"> JSX </label>
    ```
    &nbsp;

#### 2-6 : Use JS Variables in JSX

-   Example :

    ```jsx
    let text1 = "blue"; //              Define a Variable

    const App = () => {
        let text2 = "blue";
        return (
            <div>
                {text1} is {text2}       <!-- // sky is blue -->
            </div>
        );
    };
    ```

-   All Variables :

    ```jsx
    let text = "sth"; //                    {text}  returns   sth
    let num = 5; //                         {num}   returns   5
    let arr = ["Hi", "There"]; //           {arr}   returns   HiThere
    let arr2 = [2, 3]; //                   {arr2}  returns   23
    ```

    ```jsx
    let styles = { color: "red", float: "right" };
    <p style={styles}> red </p>;
    ```

-   Functions

    ```jsx
    let getButtonText = () => {
        return "Click On Me"; //                    Function (Returns a string)
    };

    const App = () => {
        return (
            <button class="btn">
                Please {getButtonText()}        <!-- // Please Click On Me -->
            </button>
        );
    };
    ```

&nbsp;

#### 2-7 : ERROR : Objects are not valid as a React child

```jsx
const buttonText = { text: "Click Me" }; //         Define an Object

const App = () => {
    return <div> {buttonText} </div>;           <!-- // ERROR : Objects are not valid as a React child -->
    return <div> {buttonText.text} </div>;      <!-- // Solved  :) -->
```

\
&nbsp;

---

## Props

#### 3-11 : Use a Component in another one

1. Create 'src/CommentDetail.js' :

    ```jsx
    import React from "react";

    const CommentDetail = () => {
        return <div> its a Reusable Component </div>;
    };

    export default CommentDetail; // Export (to use in another component)
    ```

2. Edit 'src/index.js' :
    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import CommentDetail from "./CommentDetail"; // Import from 'src/CommentDetail.js'
    ```
