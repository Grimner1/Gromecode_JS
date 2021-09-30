const delay = (deleyTime) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, deleyTime);
  });

deley(1500).then((el) => console.log('111'));
