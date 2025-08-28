import { css } from 'lit';

export default css`
  :host {
    display: block;
    background-color: var(--ilw-breadcrumbs--background-color);
    color: var(--ilw-breadcrumbs--text-color);
    --ilw-breadcrumbs--link-color: var(--ilw-link--color);
    --ilw-breadcrumbs--link-visited-color: var(--ilw-link--visited-color);
    --ilw-breadcrumbs--link-focused-color: var(--ilw-link--focused-color);
    --ilw-breadcrumbs--separator-color: var(--il-altgeld);
  }
  :host([theme="blue"]) {
    --ilw-breadcrumbs--background-color: var(--il-blue);
    --ilw-breadcrumbs--text-color: white;
    --ilw-breadcrumbs--link-color: #8DD1EB;
    --ilw-breadcrumbs--link-visited-color: white;
    --ilw-breadcrumbs--link-focused-color: var(--il-orange);
    --ilw-breadcrumbs--separator-color: var(--il-orange);
  }
  ::slotted(a) {
    color: var(--ilw-breadcrumbs--link-color);
  }
  ::slotted(a:visited) {
    color: var(--ilw-link--visited-color);
  }
  ::slotted(a:hover) {
    color: var(--ilw-link--focused-color);
  }
  ::slotted(a:focus) {
    color: var(--ilw-link--focus-color);
    background-color: var(--ilw-link--focus-background-color);
    outline: var(--ilw-link--focus-outline);
  }
  .breadcrumb {
    background-color: var(--ilw-breadcrumbs--background-color);
    color: var(--ilw-breadcrumbs--text-color);
    padding: 0.5rem 1rem;
  }
  .breadcrumb.fixed {
    left:50%;
    margin-left:-50vw;
    margin-right:-50vw;
    padding-left:0;
    padding-right:0;
    position:relative;
    right:50%;
    width:100vw;
  }
  .breadcrumb.page {
    margin: var(--ilw-breadcrumbs--main-margin, 0);
  }
  .breadcrumb ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .breadcrumb li {
    display: inline;
    vertical-align: baseline;
    font: 400 0.875rem/1.5rem var(--il-font-sans);
  }
  .breadcrumb li + li::before {
    content: '>';
    padding: 0 6px;
    color: var(--ilw-breadcrumbs--separator-color);
  }
  :host([theme="blue"]) ::slotted(a:visited) {
    color: var(--ilw-breadcrumbs--link-visited-color);
  }
  :host([theme="blue"]) ::slotted(a:hover) {
    color: var(--ilw-breadcrumbs--link-focused-color);
  }
  :host([theme="blue"]) ::slotted(a:focus) {
    color: var(--ilw-link--focus-color);
    background-color: var(--ilw-link--focus-background-color);
    outline: var(--ilw-link--focus-outline);
  }
`;