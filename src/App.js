import { useState } from "react";
// import ImgWithFallback from "./components/ImgWithFallback";
import Loader from "./components/Loader";
import ImgWithFallback from "./components/ImgWithFallback";

import "./App.css";
import image1 from "./assets/image1.webp";
import image1f from "./assets/image1.png";
import image2 from "./assets/image2.webp";
import image2f from "./assets/image2.png";
import image3 from "./assets/image3.webp";
import image3f from "./assets/image3.png";
import image4 from "./assets/image4.webp";
import image4f from "./assets/image4.png";
import image5 from "./assets/image5.webp";
import image5f from "./assets/image5.png";
import image6 from "./assets/image6.webp";
import image6f from "./assets/image6.png";
import image7 from "./assets/image7.webp";
import image7f from "./assets/image7.png";

const images = [
  {
    url: image1,
    fallbackUrl: image1f,
    description: "a van Gogh style painting of a bowl of pho soup"
  },
  {
    url: image2,
    fallbackUrl: image2f,
    description: "an oil pastel drawing of pho soup"
  },
  { url: image3, fallbackUrl: image3f, description: "pho soup, comic style" },
  {
    url: image4,
    fallbackUrl: image4f,
    description: "pho soup, comic style (v2)"
  },
  {
    url: image5,
    fallbackUrl: image5f,
    description: "an andy warhol style painting of pho soup"
  },
  {
    url: image6,
    fallbackUrl: image6f,
    description: "pixel art of a pho soup bowl"
  },
  {
    url: image7,
    fallbackUrl: image7f,
    description: "a studio ghibli style drawing of pho soup"
  }
];

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
        <h1>Gallaria Phở</h1>{" "}
        <p>
          Prompt: "<span>{images[currentImage].description}</span>"
        </p>
        <h3>
          A gallery of <a href='https://openai.com/product/dall-e-2'>Dall-E</a>{" "}
          generated images of Phở. <br />
          <a href='https://linh.fyi/' className='portfolio-link'>
            linh.fyi
          </a>
        </h3>
      </div>
      <figure>
        {numLoaded < images.length && (
          <Loader calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((image, index) => (
          <ImgWithFallback
            src={image.url}
            fallback={image.fallback}
            alt={image.description}
            key={image.url}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
}

export default App;
