# Clock App
## *Learning Class Components, State & Lifecycle in React*

### What is a component? 
It is the smallest unit of a web page which can be configured, reused and rested. It can be thought of as a function that returns HTML elements. 

## How to design a component
It should be configurable, nested and reusable. 

Take Twitter as an example: 

The sidenav is a components, which have children components (e.g. notifications, messages, bookmarks)
A single tweet is also a component, which incporates the three core features of a component: 
- Configurable: can alter the image, content, etc.
- Nested: has various child components-- comments/chat, retweet, like, etc.
- Reusable: is structured so that it can be reused in multiple places