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
    --ilw-color--focus--outline: #ffffff;
  }
  ::slotted(a) {
    color: var(--ilw-breadcrumbs--link-color);
    text-decoration: underline;
    cursor: pointer;
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
    border-bottom: solid var(--ilw-color--focus--outline) 2px;
    text-decoration: none;
  }
  ::slotted(a:focus:hover) {
    color: var(--ilw-color--focus--text);
    background-color: var(--ilw-color--focus--background);
    border-bottom: solid var(--ilw-color--focus--outline) 2px;
    text-decoration: underline;
  }
  .breadcrumb {
    background-color: var(--ilw-color--background);
    color: var(--ilw-color--text);
    padding: 0.5rem 0;
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
    margin: 0 var(--ilw-margin--side, 0);
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