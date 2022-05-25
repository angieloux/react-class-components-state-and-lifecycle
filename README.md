# Clock App
## *Learning Class Components, State & Lifecycle in React*

## What is a component? 
It is the smallest unit of a web page which can be configured, reused and rested. It can be thought of as a function that returns HTML elements. 

## How to design a component
It should be configurable, nested and reusable. 

Take Twitter as an example: 

The sidenav is a components, which have children components (e.g. notifications, messages, bookmarks)
A single tweet is also a component, which incporates the three core features of a component: 
- Configurable: can alter the image, content, etc.
- Nested: has various child components-- comments/chat, retweet, like, etc.
- Reusable: is structured so that it can be reused in multiple places


## What is State? 
Each time a State value is updated, it triggers the page to re-render. 
React is smart--and so the entire page does not refresh, however only the part of the component that is changed re-renders. (e.g. the seconds hand of the Clock)

The React.js [docs](https://reactjs.org/docs/state-and-lifecycle.html) do a great job of explaining this. 

## What are Lifecycle Methods?
There are three basic stages of the lifecycle of a component. Each of these stages has various lifecycle methods available to them. 
1. Mounting: `componentDidMount`
    - This method runs after the first render. 
    - This is the best time to run an API call, so you don't slow down your webpage. 
2. Updating: `componentDidUpdate`
    - This method runs after subsequent renders, rovided prevState is differented to the newState -- otherwise it should not run. 
    - If there is any repetitive tasks, this is the best place to do that (e.g. setInterval) 
3. Unmounted: `componentWillUnmount`
    - This method runs towards the end of the component lifecycle.
    - Best place to clear any background task running for the component (e.g. clearInterval)

