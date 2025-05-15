import { css } from 'lit';

export default css`
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
    color: #252525;
    vertical-align: baseline;
    font: 400 0.875rem/1.5rem var(--il-font-sans);
  }
  .breadcrumb li + li::before {
    content: '>';
    padding: 0 6px;
    color: var(--il-altgeld);
  }
`;