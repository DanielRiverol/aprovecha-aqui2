// eslint-disable-next-line react/prop-types
const CardDestacado = ({ img, name, text, rating = 1 }) => {
  const clampedRating = Math.min(5, Math.max(1, rating));
  const stars = Array.from({ length: clampedRating }, (_, index) => (
    <i key={index} className="bi bi-star-fill icon icon-warning"></i>
  ));
  const remainingStars = Array.from({ length: 5 - clampedRating }, (_, index) => (
    <i key={index + clampedRating} className="bi bi-star icon icon-warning"></i>
  ));

  return (
    <div className="col mt-5">
      <img src={img} alt="imagen" className="img-fluid rounded" />
      <h5 className="mt-2 fw-semibold">{name}</h5>
      <p>{text}</p>
      <div className="box">
        {stars}{remainingStars}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CardServices = ({ title, text, img }) => {
  return (
    <div className="col">
      <img src={img} alt="img-muestra" className="img-fluid rounded" />
      <h5 className="mt-3 color-danger fw-semibold">{title}</h5>
      <p className="form-text lh-lg py-3 ">{text}</p>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const CardStep = ({ number, text, index }) => {
  return (
    <div className={`col ${index !== 0 ? 'border-custom' : ''}`}>
      <div className="mt-4 circle">{number}</div>
      <p className="mt-4 text-start">{text}</p>
    </div>
  );
};

export { CardDestacado, CardStep, CardServices };
