import { css } from 'lit';

export default css`
  :host {
    display: block;
    background-color: var(--ilw-color--background);
    color: var(--ilw-color--text);
    --ilw-breadcrumbs--link-color: var(--ilw-color--link);
    --ilw-breadcrumbs--separator-color: var(--il-altgeld);
  }
  :host([theme="blue"]) {
    --ilw-breadcrumbs--separator-color: var(--il-orange);
    --ilw-breadcrumbs--link-color: #8DD1EB;
  }
  ::slotted(a) {
    color: var(--ilw-breadcrumbs--link-color);
  }
  ::slotted(a:visited) {
    color: var(--ilw-color--text);
  }
  ::slotted(a:hover) {
    color: var(--ilw-color--link-hover);
  }
  ::slotted(a:focus) {
    color: var(--ilw-color--focus--text);
    background-color: var(--ilw-color--focus--background);
    outline: solid var(--ilw-color--focus--outline) 1px;
  }
  .breadcrumb {
    background-color: var(--ilw-color--background);
    color: var(--ilw-color--text);
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
`;