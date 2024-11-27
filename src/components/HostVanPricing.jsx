import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { price } = useOutletContext();

  return (
    <h3>
      <span className="text-xl font-bold">${price.toFixed(2)}</span>
      <span className="font-medium">/day</span>
    </h3>
  );
}
