class ObserverController {
  constructor() {
    this.els = [];
    this.options = {
      threshold: [0, 1],
    };
    this.io = new IntersectionObserver(this.callback, this.options);
  }

  callback = (entries, observer) => {
    let staggerItems = [];

    entries.forEach((entry) => {
      if (entry.Intersecting && entry.intersectionRatio >= 1) {
        staggerItems.push(entry);
        observer.unobserve(entry.target);
      }
    });

    staggerItems.forEach((item, index) => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          item.target.style.animationPlayState = 'running';
        });
      }, 250 * (index + 1));
    });

    staggerItems = [];
  };
}

export default ObserverController;
