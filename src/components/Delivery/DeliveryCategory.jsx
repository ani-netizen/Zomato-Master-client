import React from "react";

function DeliverySmCard({ image, title }) {
  return (
    <>
      <div className="lg:hidden shadow rounded-md w-2/5 md:w-56">
        <div className="w-full h-24 md:h-52">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-t-md"
          />
        </div>
		<div>
			<h3 className="text-sm md:text-xl my-1 text-center font-light">{title}</h3>
		</div>
      </div>
    </>
  );
}

function DeliveryLgCard({ image, title }) {
  return (
    <>
      <div className="hidden lg:block rounded-md w-52 h-44 xl:h-48 xl:w-60 px-9">
        <div className="w-full h-5/6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-light">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryCategory(props) {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
}

export default DeliveryCategory;
