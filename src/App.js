import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState("fadeInRight");
  const [unActiveAnimation, setUnActiveAnimation] = useState("fadeInLeft");
  const [activeAnimation, setActiveAnimation] = useState("easeIn");

  const [data, setData] = useState(
    [
      {
        name: "Hannah Biker",
        job: "UX Designer at Clay Studio",
        image: "/s0.jpg",
        details:
          "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      },
      {
        name: "Hannah Biker2",
        job: "UX Designer at Clay Studio",
        image: "/s1.jpg",
        details:
          "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      },
      {
        name: "Hannah Biker3",
        job: "UX Designer at Clay Studio",
        image: "/s2.jpg",
        details:
          "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      },
      {
        name: "Hannah Biker4",
        job: "UX Designer at Clay Studio",
        image: "/s3.jpg",
        details:
          "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      },
    ].reverse()
  );

  const activeItem = data.find((x, index) => index === data.length - 1);

  const nextArrowLogic = count <= data.length - 2 ? count + 1 : 0;
  const prevArrowLogic = count >= 1 ? count - 1 : data.length - 1;

  useEffect(() => {
    setTimeout(() => {
      setAnimation("");
      setUnActiveAnimation("");
      setActiveAnimation("");
    }, 1000);
  }, [count]);

  function move(from, to, arr) {
    const newArr = [...arr];

    const item = newArr.splice(from, 1)[0];
    newArr.splice(to, 0, item);

    return newArr;
  }

  const handleNextSlider = (logic) => {
    setCount(logic);
    setData(move(data.length - 1, 0, data));
    setAnimation("fadeInRight");
    setUnActiveAnimation("fadeInLeft");
    setActiveAnimation("easeIn");
  };

  const handlePrevSlider = (logic) => {
    setCount(logic);
    setData(move(0, data.length - 1, data));
    setAnimation("fadeInRight");
    setUnActiveAnimation("fadeInLeft");
    setActiveAnimation("easeIn");
  };



  return (
    <section className="slider-container">
      <div className="mobile-heading-container">
        <span>Yönetim Kadrosu</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="slider-slides-container">
        <div className="slider-box">
          <div className="slider-box-container">
            <div className="heading">
              <div className="heading-box">
                <span>Yönetim Kadrosu</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="slider-images-container">
              {data.map((item, index) => (
                <div
                  className={`${
                    index === data.length - 1
                      ? `${activeAnimation} active-image-container`
                      : "passiveImage-container"
                  }`}
                  key={item.image}
                >
                  <img
                    alt="img"
                    className={
                      index === data.length - 1
                        ? "active-image"
                        : `passive-image ${unActiveAnimation}`
                    }
                    src={item.image}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="unActive-image-mobile-container">
            <img
              alt="img"
              src={data[data.length - 2].image}
              className={unActiveAnimation}
            />
          </div>

          <div className="active-image-container">
            <img alt="img" className={activeAnimation} src={activeItem.image} />
          </div>
        </div>

        <div className="active-item-details-container">
          <div id="active-item-details-texts" className={animation}>
            <span>{activeItem.name}</span>
            <span>{activeItem.job}</span>
            <p>{activeItem.details}</p>
          </div>

          <div className="buttons-container">
            <button
              disabled={animation !== ""}
              onClick={() => handlePrevSlider(prevArrowLogic)}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8248 8.81284H5.6387L12.6141 1.83745L10.8422 0.0780029L0.859497 10.0607L10.8422 20.0433L12.6016 18.2839L5.6387 11.3085H20.8248V8.81284Z"
                  fill="#FFCC05"
                />
              </svg>
            </button>
            <button
              disabled={animation !== ""}
              onClick={() => handleNextSlider(nextArrowLogic)}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6688 0.0780029L8.90938 1.83745L15.8723 8.81284H0.686157V11.3085H15.8723L8.90938 18.2839L10.6688 20.0433L20.6515 10.0607L10.6688 0.0780029Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
