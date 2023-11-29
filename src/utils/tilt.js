class TiltController {
  constructor(el) {
    this.root = el;
    this.imageRect = this.root.getBoundingClientRect();
    this.imageRect.center = { x: this.imageRect.width / 2, y: this.imageRect.height / 2 };
    this.SCALE_MAX = 5;
    this.SCALE_MIN = -5;
    this.X_MAX_DISTANCE = this.imageRect.center.x;
    this.X_MIN_DISTANCE = -this.X_MAX_DISTANCE;
    this.Y_MAX_DISTANCE = this.imageRect.center.y;
    this.Y_MIN_DISTANCE = -this.Y_MAX_DISTANCE;

    this.root.addEventListener('mousemove', this.handleTilt);
    this.root.addEventListener('mouseleave', this.resetTilt);
  }

  // handle tilting
  handleTilt = (e) => {
    const pointer = {
      x: e.offsetX,
      y: e.offsetY,
    };

    // pointer minus imageRect to get position relative to center of the image.
    const positionFromCenter = {
      x: pointer.x - this.imageRect.center.x,
      y: -(pointer.y - this.imageRect.center.y),
    };

    let scaledX = this.XScaleDistance(positionFromCenter.x);
    let scaledY = this.YScaleDistance(positionFromCenter.y);

    // tilt element
    this.root.style.transform = `perspective(1000px) rotateX(${scaledY}deg) rotateY(${scaledX}deg) scale3d(1,1,1)`;
  };

  // reset tilt
  resetTilt = () => {
    this.root.style.transform = null;
  };

  // scale the distance to a new range
  XScaleDistance = (distance) => {
    const scaledDistance =
      ((distance - this.X_MIN_DISTANCE) / (this.X_MAX_DISTANCE - this.X_MIN_DISTANCE)) *
        (this.SCALE_MAX - this.SCALE_MIN) +
      this.SCALE_MIN;
    return scaledDistance;
  };

  YScaleDistance = (distance) => {
    const scaledDistance =
      ((distance - this.Y_MIN_DISTANCE) / (this.Y_MAX_DISTANCE - this.Y_MIN_DISTANCE)) *
        (this.SCALE_MAX - this.SCALE_MIN) +
      this.SCALE_MIN;
    return scaledDistance;
  };
}

export default TiltController;
