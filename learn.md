# Mordern React & Redux

&nbsp;

## Functional Components : Display Content

#### 1-11 : 'src/index.js' file :

```js
// Import the React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";

// Create a react component.
const App = () => {
    return <div>Hi there!</div>;
};

// Take the react component and show it on the screen.
ReactDOM.render(<App />, document.querySelector("#root"));
```

\
&nbsp;

## Building Content with JSX

#### 2-2 : Convert Html into JSX

1. class :

    ```jsx
    <p class="a"> Html </p>
    <p className="a"> JSX </p>
    ```

2. inline style :
    ```jsx
    <p style="color: red; text-align: center;"> Html </p>
    <p style={{ color: 'red', text-align: 'center' }}> JSX </p>
    ```
3. label for :
    ```jsx
    <label for="name"> Html </label>
    <label htmlFor="name"> JSX </label>
    ```
    &nbsp;

#### 2-6 : Use JS Variables in JSX

1.  Example :

    ```js
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

2.  All Variables :

    ```js
    let text = "sth"; //                    {text}  returns   sth
    let num = 5; //                         {num}   returns   5
    let arr = ["Hi", "There"]; //           {arr}   returns   HiThere
    let arr2 = [2, 3]; //                   {arr2}  returns   23
    let styles = { color: "red", float: "right" }; // JSX : <div style={styles}>
    ```

3.  Functions

    ```js
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

```js
const buttonText = { text: "Click Me" }; //         Define an Object

const App = () => {
    return <div> {buttonText} </div>;           <!-- // ERROR : Objects are not valid as a React child -->
    return <div> {buttonText.text} </div>;      <!-- // Solved  :) -->
```
