export default class RotationUI {
  constructor() {
    this.$image = document.querySelector('.c-app__rotation--image');
    this.$range = document.querySelector('.c-app__rotation--box');
    this.degree = 0;

    setInterval(() => {
      this.animation();
    }, 0.1);
  }

  animation() {
    const rotation = (this.degree * Math.PI) / 180;
    const targetX = this.$range.clientWidth / 2 + 100 * Math.cos(rotation);
    const targetY = this.$range.clientHeight / 2 + 100 * Math.sin(rotation);

    this.$image.style.marginLeft = `${targetX}px`;
    this.$image.style.marginTop = `${targetY}px`;

    this.degree += 0.3;
  }
}
