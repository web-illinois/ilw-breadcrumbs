import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import styles from './ilw-breadcrumbs.styles.js';
import './ilw-breadcrumbs.css';
import { ManualSlotController } from './ManualSlotController.js';

//  Define allowed width values
export type BreadcrumbWidth = 'full' | 'auto' | 'page' | '';

@customElement('ilw-breadcrumbs')
export class Breadcrumbs extends LitElement {
    static override shadowRootOptions: ShadowRootInit = {
        ...LitElement.shadowRootOptions,
        slotAssignment: 'manual',
    };

    private _observer: ManualSlotController;

    @property({ type: String })
    label: string = 'Breadcrumbs';

    @property({ type: String })
    width: BreadcrumbWidth = '';

    @property({ type: String })
    theme: string = '';

    static override get styles(): CSSResultGroup {
        return styles;
    }

    constructor() {
        super();
        this._observer = new ManualSlotController(this);
    }

    get outerWidth(): string {
        return this.width === 'full' || this.width === 'auto'
            ? 'fixed'
            : this.width === 'page'
                ? 'page'
                : '';
    }

    override render(): TemplateResult {
        return html`
      <nav aria-label=${this.label} class="breadcrumb ${this.outerWidth}">
        <ol>
          ${map(
            Array.from(this.children),
            () => html`<li><slot></slot></li>`
        )}
        </ol>
      </nav>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ilw-breadcrumbs': Breadcrumbs;
    }
}
