import { css } from 'lit';

export default css`
    :host {
        counter-reset: breadcrumb 0;
        color: #252525;
    }
    li {
        display: inline;
        color: #252525;
        vertical-align: baseline;
    }
    .separator {
        position: relative;
        display: inline-block;
        height: 8px;
        width: 8px;
        padding: 0 4px;
    }
    .separator svg {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        fill: var(--il-blue);
    }
    a {
        color: var(--ilw-link--color);
    }
    a:visited {
        color: var(--ilw-link--visited-color);
    }
    a:focus, a:hover {
        color: var(--ilw-link--focused-color);
    }
    a:last-child {
        text-decoration: none;
    }
    a:last-child:focus, a:last-child:hover {
        color: #252525;
        cursor: text;
    }
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
        font: 400 0.875rem/2rem var(--il-font-sans);
    }
`;