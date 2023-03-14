import React, { FC } from 'react';


interface FoodTruckProps {}

const FoodTruck: FC<FoodTruckProps> = () => (
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>

  </div>
);

export default FoodTruck;
