import {
  LitElement, html, css, customElement,
} from 'lit-element';

const SIZE_REDUCED = 'SIZE_REDUCED';
const SIZE_FULL = 'SIZE_FULL';

const detectChanges = handleSize => () => {
  if (window.innerWidth >= 800) handleSize(SIZE_FULL);
  if (window.innerWidth < 800) handleSize(SIZE_REDUCED);
};

@customElement('bio-wc')
class Bio extends LitElement {
  size = null;

  // { url: string, description: string }
  list = [];

  changeSize = (newSize) => {
    if (this.size !== newSize) {
      this.size = newSize;
      this.performUpdate();
    }
  };

  static get styles() {
    return css`
      .SIZE_FULL a {
        color: #fff;
        text-decoration: none;
      }

      .SIZE_FULL .description {
        display: none;
      }

      .SIZE_REDUCED a {
        text-decoration: none;
        color: inherit;
      }

      @media print {
        a {
          text-decoration: none !important;
          color: inherit !important;
        }

        .description {
          display: inline !important;
        }
      }
    `;
  }

  constructor() {
    super();
    this.sizeHandler = detectChanges(this.changeSize);
  }

  connectedCallback() {
    super.connectedCallback();
    this.sizeHandler();

    window.addEventListener('resize', this.sizeHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('resize', this.sizeHandler);
  }

  render() {
    return html`
      <section class="print_only bio">
        <div class="content ${this.size}">
          ${this.list.map(
    el => html`
              <p>
                <a href="${el.url}" target="_blank">
                  <strong>${el.description}</strong><span class="description">: ${el.url}</span></a
                >
              </p>
            `,
  )}
        </div>
      </section>
    `;
  }
}

export default Bio;
