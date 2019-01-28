const images = [
  { src: baseUrl + "/abstract01.jpg" },
  { src: baseUrl + "/abstract02.jpg" },
  { src: baseUrl + "/abstract03.jpg" },
  { src: baseUrl + "/abstract04.jpg" }
];

export default class App extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={images[i].src} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          {images.map(img => (
            <div>
              <img src={img.src} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
