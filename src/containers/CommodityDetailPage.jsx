import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CommodityDetailPage = ({ commodities }) => {
  const [commodity, setcommodity] = useState({});

  let params = useParams();

  useEffect(() => {
    function getcommodity(commodityID) {
      return commodities.find((commodity) => commodity.id === commodityID);
    }
    const commodityTerpilih = getcommodity(parseInt(params.id));
    setcommodity(commodityTerpilih);
   
  }, [params.id, commodities]);

  return (
    <>
      <div>id commodity: {params.id}</div>
      <div>nama commodity: {commodity?.name} </div>
      <div>Price : {commodity?.value} </div>
      <div>
        <img src={commodity?.background_image} alt="imagee" width="400px" />
      </div>
    </>
  );
};

export default CommodityDetailPage;
