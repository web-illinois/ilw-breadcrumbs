import { css } from 'lit';

export default css`
  .breadcrumb ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .breadcrumb li {
    display: inline;
    color: #252525;
    vertical-align: baseline;
    font: 400 0.875rem/2rem var(--il-font-sans);
  }
  .breadcrumb li + li::before {
    content: '>';
    padding: 0 6px;
  }
`;