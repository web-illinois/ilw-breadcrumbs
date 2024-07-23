import { LitElement, html } from 'lit';
import styles from './ilw-breadcrumbs.styles.js';
import './ilw-breadcrumbs.css';

class Breadcrumbs extends LitElement {

    static get properties() {
        return {
            label: {type: String, attribute: true},
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.label = "Breadcrumbs";
    }

    render() {
        return html`
      <nav aria-label=${this.label} class="breadcrumb">
        <slot></slot>
      </nav>
    `;
    }
}

customElements.define('ilw-breadcrumbs', Breadcrumbs);