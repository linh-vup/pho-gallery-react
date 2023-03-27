import { useState } from 'react';
import './App.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';

const images = [image1, image2, image3, image4, image5];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length;
    // using callback because previous index of image is needed
    setCurrentImage((currentImage) =>
      currentImage < length - 1 ? currentImage + 1 : 0
    );
  };

  return (
    <section>
      <div className='title'>
        <h1>Gallaria Pho</h1>
        <h2>
          A Gallery of Dall-E generated images of Pho. A project by Linh Vu
        </h2>
      </div>
      <figure>
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img src={images[currentImage]} alt='pho' onClick={handleClick} />
      </figure>
    </section>
  );
}

export default App;
