import {
  LitElement, html, css, customElement,
} from 'lit-element';

@customElement('experience-wc')
class Experience extends LitElement {
  static get properties() {
    return {
      company: { type: String },
      name: { type: String },
      description: { type: String },
      startDate: { type: String },
      endDate: { type: String },
    };
  }

  static get styles() {
    return css`
      .experience {
        border-bottom: solid 1px #000;
      }
      header {
        display: flex;
        margin-top: 5px;
        flex: 1 100%;
        align-items: center;
      }

      .experience-time {
        text-align: right;
        flex-shrink: 0;
      }
      .experience-description {
        line-height: 1.5;
      }
      .experience-company {
        width: 100%;
        margin: 5px 0px;
      }

      .experience-role {
        font-weight: bold;
        font-style: italic;
        margin-top: 0;
        color: grey;
        margin-bottom: -10px;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'ND';
    this.description = 'ND';
    this.startDate = 'ND';
    this.endDate = 'ND';
  }

  render() {
    return html`
      <article class="experience">
        <div class="experience-description">
          <header>
            <h4 class="experience-company">${this.company}</h4>
            <time class="experience-time">
              ${this.startDate} - ${this.endDate}
            </time>
          </header>
          <h4 class="experience-role">${this.name}</h4>
          <p class="experience-description">${this.description}</p>
        </div>
      </article>
    `;
  }
}

export default Experience;
