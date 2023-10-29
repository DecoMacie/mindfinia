function HomeCards({ title, subTitle, image, description }) {
  return (
    <div className="card-home">
      <div className="grid md:grid-cols-2 gap-20 flex-row md:flex-col rounded-lg bg-white">
        <div className="card-content my-16">
          <div className="media-content flex-row">
            <p className="dash-mark"></p>
            <h3 className="syneFont text-xl md:text-4xl font-semibold text-neutral-800">
              {title}
            </h3>
            <h5 className="mb-5 syneFont text-base md:text-lg md:font-bold">
              {subTitle}
            </h5>
          </div>
          <div className="content">
            <p className="rubikFont text-sm md:text-lg text-neutral-600">
              {description}
            </p>
          </div>
        </div>
        <div className="card-image">
          <img
            className="h-96 w-2xl rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
            src={image}
            alt="home card logo"
            // style={{ boxShadow: "1px 3px 1px cyan" }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomeCards;
