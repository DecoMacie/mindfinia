import "../components/SliderServicesOffer.css";

function CardServices({ servicesOffer, index }) {
  let service = servicesOffer[index];

  return (
    <div className="swiper-cardDM text-left p-2 m-4">
      <div>
        <i className={service.icon} />
        <div className="syneFont text-xl font-semibold py-5">
          {service.title}
        </div>
      </div>
      <div className="rubikFont text-sm font-normal pb-4">
        {service.description}
      </div>
    </div>
  );
}

export default CardServices;
