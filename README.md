# Web Components

Web Components is a set of technologies that allow you to create reusable custom elements, with their functionality encapsulated away from the rest of your code, and utilize them in your web apps. It consists of three main technologies:

- Custom elements: a set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
- Shadow DOM: a set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element and controlling associated functionality.
- HTML templates: the <template> and <slot> elements enable you to write markup templates that are not displayed in the rendered page.

To implement a web component, you generally follow these steps:

1. Create a class that specifies your web component functionality, using the class syntax.
2. Register your new custom element using the CustomElementRegistry.define() method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
3. If required, attach a shadow DOM to the custom element using Element.attachShadow() method.
4. If required, define an HTML template using <template> and <slot>.
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

Custom elements can be either autonomous or customized built-in elements, which inherit from basic HTML elements.
