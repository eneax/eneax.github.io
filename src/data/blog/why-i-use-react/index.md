---
title: 'Why I use React'
date: '2019-10-11T22:12:03.284Z'
description: 'React is my tool of choice for building modern websites.'
tags: ['react']
---

React is my tool of choice for building modern websites.
Before exploring a couple of reasons why to use React, let's talk about what actually is React.

## What is React?

React is a library for building user interfaces. There are also other JavaScript libraries out there, but in my opinion, what makes React special are the following features: composition, unidirectional dataflow, declarative UI, 'just JavaScript' and the entire ecosystem behind the library.

## Component Composition

Building a React app is all about components.
In Javascript, we have the ability to take individual functions and compose them together to get some value.
This is what is called function composition.

```js
function getProfilePic(username) {
  return `https://pic.github.com/ + ${username}`;
}

function getProfileUrl(username) {
  return `https://www.github.com/ + ${username}`;
}

function getAvatar(username) {
  return {
    pic: getProfilePic(username),
    url: getProfileUrl(username),
  };
}

getAvatar('eneax');
```

In React, we can use the same approach, but instead of getting a value in return, we can get a UI component.

```jsx
function ProfilePic (props) {
  return (
    <img src={`https://pic.github.com/ + ${props.username}`} />
  )
}

function ProfileUrl (props) {
  return (
    <a href={`https://www.github.com/ + ${props.username}`}>
      {props.username}
    </a>
  )
}

function Avatar(props) {
  return (
    <ProfilePic username={props.username} />
    <ProfileUrl username={props.username} />
  )
}

<Avatar username='eneax' />
```

With a given set of inputs, the output (how the component looks on the page) will always be the same.

## Unidirectional Dataflow

React was built with the idea of **one-way data flow**, which means that data changes come from the **top** of the app and are propagated **downwards** through its various components.

In order to build predictable apps, it's vital to know when and how the state of your app changes.

Instead of the source of truth of the state of your app living inside of the DOM, it lives inside your React component.
So we can decide when the state should change and how to the UI should change when the state changes.

Basically, the UI updates only if the state updates, according to what is called one-way dataflow.

## Declarative UI

Declarative UI means that React allows you to describe what the UI should look like and not how it gets updated. While the library will take care of updating the DOM, we can focus on how the state inside a component changes and what the UI will look like once the state has been updated.

An example of the declarative approach is the `.map()` method:

```js
function double(arr) {
  return arr.map((item) => item * 2);
}
```

The imperative approach, instead, consists in writing:

```js
function double(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}
```

## Just JavaScript

Although this is a debatable topic for developers, if one looks at the React API, it is obvious that there isn't much API to remember.
Plus, the React team doesn't want to recreate functionalities that you can already do in JavaScript. If you remember, this is something that jQuery does: for instance when selecting a DOM element in order to modify it.

For instance, if you want to loop over an array of cars, with React, you’d use JavaScript’s `.map()` method:

```jsx
const cars = ['Mercedes', 'BMW', 'Tesla']

<ul>
  {cars.map((car) => (
    <li>
      {car}
    </li>
  ))}
</ul>
```

## The Ecosystem

React itself is a UI library. However, to get a simple React app up and running, you need the right combination of different technologies, like: NPM, Babel, and Webpack. Moreover, you need to choose a router (if you need one), since React doesn't come with a built in router.
Then, you have to consider how to style your app, use or not to use css-in-js and finally how to manage the state.

Let's now have a look on how all these pieces fit together.

### JSX

The idea behind JSX (**JavaScript Syntax Extension**) is to represent our React component tree using markup, like we would normally do in HTML.
JSX produces React “elements” and we use it to describe what the UI should look like.

When using JSX, there is one thing that we need to keep in mind: _browsers don't know how to read JSX_.
For this reason, we must pass our code through a compiler (like Babel), which will transform our code into JavaScript (_transpiled code_).

### Babel

Babel is a JavaScript transpiler. It takes ES6 code and converts it into ES5 code.
It allows developers to use the latest features of JavaScript, while making sure that the code will run also in browsers that only support ES5.

A great feature of Babel is that it understands JSX. We need to instruct the browser that we want to use Babel to compile and run our Javascript code and Babel will compile our JSX into vanilla ES5 that our browser can interpret and execute.

### Webpack

Webpack is a module bundler. Instead of importing the scripts in the index.html, it bundles together all our modules in order to create a single file that the browser can read.

### Routing

Even if React doesn’t have a build-in router, the most popular one is React Router.
The job of a router is to render specific components based on the current Url.

```jsx
<Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
</Router>
```

If the user is in the home page (`/`), the router will render the Home component. When the user visits the `/about`, the router will render the About component.

### Styling

If the concept of being 'just JavaScript' wasn't controversial enough, another topic were developers like to argue about is styling React components.

The classic way of styling a React application is to use a CSS file, or SASS or any other CSS pre-processor where you have classes and the cascading effect.
However, if we want to fully embrace the whole component model idea, we could write CSS inside our JS file (css-in-js) in order to have all the styles for a component live in the component itself and in this way avoid the problem of overwriting classes with the cascading effect.

One of the most popular libraries for writing CSS in JS is Styled Components and below you can see how to style a button with it:

```jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: black;
  color: white;
  border: 2px solid white;
`;
render(
  <div>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </Button>
  </div>
);
```

### Redux

Redux, born as 'A predictable state container for JavaScript apps', can be used in any view library, not only React.
While the idea behind React is to build small individual components that manage their own state, Redux is quite different. In Redux, you have all the state in a single location, named store, and it is passed to components as props.

Despite being created with different philosophies in mind, React and Redux have been used frequently together in the last 2-3 years.
More recently, with the new features added to React (i.e. Hooks), developers are starting to realize that Redux is not always necessary in a React application and you may never need Redux, unless working on some big application with several moving parts.

## Conclusion

Many applications and tools have been built using React or on top of React. For instance, we have my favorite open source framework Gatsby.js, based on React that allows developers to build blazing fast websites and apps and Styled Components, which helps developers to style apps, while using the best of ES6 and CSS.

Facebook has invested and is investing heavily in React’s development, while focusing and solving the right problems.
Moreover, the React community is always welcoming newcomers and ready to help. I guarantee you that any time you will encounter a problem in one of your projects, there will always be someone else who faced and solved the same problem before you.

If you are interested in getting started with React or simply want to keep up with the ecosystem, check the following links: [React.js Official Documentation](https://reactjs.org), [React.js Newsletter](http://reactjsnewsletter.com) and [React.js Subreddit](https://www.reddit.com/r/reactjs).
