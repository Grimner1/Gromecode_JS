// export
const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'somePhoto');
    imgElem.src = imgSrc;
    const imgContainer = document.querySelector('.page');
    imgContainer.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    const error = () => {
      reject(new Error('Image load is failed...'));
    };

    imgElem.addEventListener('error', error);
  });
  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImage(imgSrc);

const onImageLoaded = ({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// result.then((some) => console.log(some));
result.then(
  (some) => onImageLoaded(some),
  (error) => console.log(error),
);
// result.then((some) => onImageLoaded(some));

// result.catch((error) => console.log(error));

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
