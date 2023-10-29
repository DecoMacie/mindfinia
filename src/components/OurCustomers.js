function OurCustomers({ customers }) {
  const customerList1 = customers.slice(0, 4);
  const customerList2 = customers.slice(5, customers.lenght);

  const renderedCustomers1 = customerList1.map((customer) => {
    let id = Math.floor(Math.random() * 1000);
    return (
      <li key={id} className="text-xl flex pr-8 syneFont">
        <img src={customer} />
      </li>
    );
  });

  const renderedCustomers2 = customerList2.map((customer) => {
    let id = Math.floor(Math.random() * 1000);
    return (
      <li key={id} className="text-xl flex pr-8 syneFont">
        <img src={customer} />
      </li>
    );
  });

  return (
    <div className="mb-28">
      <div className="my-5 syneFont text-xl md:text-4xl text-neutral-800">
        <h3 className="flex justify-center font-normal">Our</h3>
        <h3 className="flex justify-center font-semibold">Valued Customer</h3>
      </div>
      <div>
        <div>
          <ul className="flex flex-row-reverse justify-center">
            {renderedCustomers1}
          </ul>
          <ul className="flex flex-row-reverse justify-center">
            {renderedCustomers2}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OurCustomers;
