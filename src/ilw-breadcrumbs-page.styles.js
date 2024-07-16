import { css } from 'lit';

export default css`
    :host {
        counter-increment: breadcrumb;
    }
    :host(*:last-of-type) .separator {
        display: none;
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
`;