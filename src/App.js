import { useState } from 'react';
import './App.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';

const images = [image1, image2, image3, image4, image5];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className='loading-bar'>
      <label htmlFor='images-loaded'>Loading images ...</label>
      <progress id='images-loaded' max='100' value={calculatedWidth}></progress>
    </div>
  </aside>
);

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length;
    // using callback because previous index of image is needed
    setCurrentImage((currentImage) =>
      currentImage < length - 1 ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <div className='title'>
        <h1>Gallaria Phở</h1>
        <h2>
          A Gallery of Dall-E generated images of Phở. <br />A project by{' '}
          <a href='https://linh.fyi/'>Linh Vu</a>
        </h2>
      </div>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt='pho'
            src={imageURL}
            key={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>
    </section>
  );
}

export default App;
