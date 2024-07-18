import { LitElement, html, nothing } from 'lit';
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

    renderChevron() {
        return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path
          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        />
      </svg>
    `;
    }

    render() {
        return html`
      <nav aria-label=${this.label} class="breadcrumb">
        <ol>
          ${Array.from(this.children).map((child, index, children) => {
            const isCurrent = child.hasAttribute('current');
            const href = child.getAttribute('href');
            const label = child.innerHTML;
            return html`
              <li class=${isCurrent ? 'current' : ''}>
                <a href=${href} aria-current=${isCurrent ? 'page' : nothing}>
                  <slot name="breadcrumb-${index}">${label}</slot>
                </a>
                ${index < children.length - 1 ? html`<span class="separator" aria-hidden="true">${this.renderChevron()}</span>` : ''}
              </li>
            `;
        })}
        </ol>
      </nav>
    `;
    }

    firstUpdated() {
        Array.from(this.children).forEach((child, index) => {
            child.setAttribute('slot', `breadcrumb-${index}`);
        });
    }
}

customElements.define('ilw-breadcrumbs', Breadcrumbs);