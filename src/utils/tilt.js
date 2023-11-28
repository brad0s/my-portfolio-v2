class TiltController {
  constructor(el) {
    this.root = el;
    this.imageRect = this.root.getBoundingClientRect();
    this.imageRect.center = { x: this.imageRect.width / 2, y: this.imageRect.height / 2 };
    this.SCALE_MAX = 5;
    this.SCALE_MIN = -5;
    this.MAX_DISTANCE = this.getMaxDistance();
    this.MIN_DISTANCE = this.getMinDistance();

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

    let scaledX = this.scaleDistance(positionFromCenter.x);
    let scaledY = this.scaleDistance(positionFromCenter.y);

    // tilt element
    this.root.style.transform = `perspective(1000px) rotateX(${scaledY}deg) rotateY(${scaledX}deg) scale3d(1,1,1)`;
  };

  // reset tilt
  resetTilt = () => {
    this.root.style.transform = null;
  };

  // scale the distance to a new range
  scaleDistance = (distance) => {
    const scaledDistance =
      ((distance - this.MIN_DISTANCE) / (this.MAX_DISTANCE - this.MIN_DISTANCE)) *
        (this.SCALE_MAX - this.SCALE_MIN) +
      this.SCALE_MIN;
    return scaledDistance;
  };

  // get distance from center
  getDistanceFromCenter = (x2, x1, y2, y1) => {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  };

  // get max distance
  getMaxDistance = () => {
    const maxDistance = this.getDistanceFromCenter(
      this.imageRect.center.x,
      0,
      this.imageRect.center.y,
      0
    );
    return Number(maxDistance.toFixed(0));
  };

  // get min distance
  getMinDistance = () => {
    return -Math.abs(this.MAX_DISTANCE);
  };
}

export default TiltController;
