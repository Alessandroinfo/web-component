/**
 * ParagraphWordCounter is a Customized built-in elements
 * Define a class called ParagraphWordCounter that extends
 * the HTMLParagraphElement class
 *
 */
class ParagraphWordCounter extends HTMLParagraphElement {
    // Constructor that counts the words of the text content of the paragraph
    constructor() {
        // Call the constructor of the parent HTMLParagraphElement class
        super();

        // Function that counts the number of words in a string
        function countWords(words) {
            return words.split(' ').length;
        }

        // Get the text content of the paragraph
        const words = this.textContent || this.innerText;

        // Count the number of words in the text content
        const count = countWords(words);

        // Attach an open shadow DOM to the element
        this.attachShadow({mode: 'open'});

        // Create a paragraph element to hold the content of the original paragraph
        const p = document.createElement('p');
        p.innerHTML = this.innerHTML;

        // Add the paragraph to the shadow root
        this.shadowRoot.appendChild(p);

        // Create a div element to display the word count
        const result = document.createElement('div');
        result.textContent = count;

        // Add the word count to the shadow root
        this.shadowRoot.appendChild(result);
    }
}

// Register the new custom element with the name 'paragraph-word-counter' that extends the 'p' element
customElements.define('paragraph-word-counter', ParagraphWordCounter, {extends: 'p'});
