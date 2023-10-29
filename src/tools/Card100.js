function Card100({ title, description }) {
  return (
    <div className="w-1/3 text-center my-16">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full border-2 border-black">
          <h2 className="rubikFont text-4xl font-bold text-center pt-11">
            100%
          </h2>
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl syneFont font-bold leading-tight">
          {title}
        </h5>
        <p className="mb-4 rubikFont text-lg text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

export default Card100;
