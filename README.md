# Web Components

Web Components is a set of technologies that allow you to create reusable custom elements, with their functionality
encapsulated away from the rest of your code, and utilize them in your web apps.
It consists of three main technologies:

- Custom elements: a set of JavaScript APIs that allow you to define custom elements and their behavior, which can then
  be used as desired in your user interface.
- Shadow DOM: a set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element and controlling
  associated functionality.
- HTML templates: the `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the
  rendered page.

To implement a web component, you generally follow these steps:

1. Create a class that specifies your web component functionality, using the class syntax.

    ```javascript
    class MyComponent extends HTMLElement {
        constructor() {
            super();
            // Component logic and functionality
        }
    
    // Add additional methods and callbacks as needed
    }
    ```

2. Register your new custom element using the CustomElementRegistry.define() method, passing it the element name to be
   defined, the class or function in which its functionality is specified, and optionally, what element it inherits
   from.

    ```javascript
    customElements.define('my-component', MyComponent);
    ```

3. If required, attach a shadow DOM to the custom element using Element.attachShadow() method.

    ```javascript
    class MyComponent extends HTMLElement {
        constructor() {
            super();
            // Component logic and functionality
            const shadowRoot = this.attachShadow({mode: 'open'});
            // Add elements and styles to the shadow DOM
        }
    
        // Add additional methods and callbacks as needed
    }
    ```

4. If required, define an HTML template using <template> and <slot>.

    ```javascript
    class MyComponent extends HTMLElement {
        constructor() {
            super();
            // Component logic and functionality
            const shadowRoot = this.attachShadow({mode: 'open'});
            const template = document.createElement('template');
            template.innerHTML = `
                <style>
                    /* Component styles */
                </style>
                <div>
                    <slot></slot>
                </div>
                `;
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    
        // Add additional methods and callbacks as needed
    }
    ```

5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

    ```html
    
    <my-component></my-component>
    ```

Custom elements can be either autonomous or customized built-in elements, which inherit from basic HTML elements.

# Getting started

👨‍💻 This is a code example that showcases the use of Web Components.

It includes two custom elements:

1️⃣ `button-enhanced` is an autonomous custom element that creates a button with enhanced styling and a custom click
event.

2️⃣ `paragraph-word-counter` is a customized built-in element that extends the p element and displays the word count of
its text content.

The code also includes lifecycle methods for the button-enhanced custom element that are invoked when the element is
connected, disconnected, adopted, or when its attributes change.

▶️ Open the `index.html` in your browser to see the custom components rendered and the relative console log.
