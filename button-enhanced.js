/**
 * ButtonEnhanced is a Autonomous custom elements
 */
class ButtonEnhanced extends HTMLElement {
    constructor() {
        super();

        // Initialize the component's state
        this.attachShadow({mode: 'open'});

        // Create a style element and append it to the component's shadow root
        const style = document.createElement('style');
        style.textContent = `
            button {
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                transition: background-color 0.3s, color 0.3s;
            }
            button.primary {
                background-color: #007aff;
                color: #fff;
                border: none;
            }
            button.secondary {
                background-color: transparent;
                color: #6c757d;
                border: 1px solid #6c757d;
            }
        `;
        this.shadowRoot.appendChild(style);

        // Create a button element, set its text content, and add any classes specified as an attribute
        const button = document.createElement('button');
        button.textContent = this.textContent;
        const classes = this.getAttribute('classes');
        if (classes) {
            classes.split(' ').forEach(className => {
                button.classList.add(className);
            });
        }

        // Add a click event listener to the button that dispatches a custom event
        button.addEventListener('click', this._handleClick.bind(this));
        this.shadowRoot.appendChild(button);
    }


    _handleClick(event) {
        // Dispatch a custom click-enhanced event
        const clickEvent = new CustomEvent('click-enhanced', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(clickEvent);
    }

    connectedCallback() {
        console.log('connectedCallback', 'Invoked each time the custom element is' +
            ' appended into a document-connected element. ' +
            'This will happen each time the node is moved, ' +
            'and may happen before the element\'s contents have' +
            ' been fully parsed.');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback', 'Invoked each time the custom element is' +
            ' disconnected from the document\'s DOM.');
    }

    adoptedCallback() {
        console.log('adoptedCallback', 'Invoked each time the custom element is moved to a new document.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback', 'Invoked each time one of the custom element\'s ' +
            'attributes is added, removed, or changed. ' +
            'Which attributes to notice change for is specified' +
            ' in a static get observedAttributes method', name, oldValue, newValue);
    }
}

// Define the custom element
customElements.define('button-enhanced', ButtonEnhanced);
