export default class HelloUI {
  constructor() {
    this.$ = document.querySelector('.c-app__round_off--form');
    this.$formText = this.$.querySelector('.c-app__round_off--text');
    this.$formValue = this.$.querySelector('.c-app__round_off--value');
    this.$formButton = this.$.querySelector('.c-app__round_off--button');

    this.bind();
  }

  bind() {
    this.$formButton.addEventListener('click', () => {
      this.round();
    });
  }

  round() {
    this.$formValue.textContent = Number(Math.round(this.$.textbox.value));
  }
}
