import { useOutletContext } from "react-router-dom";
import { getVan } from "../scripts";

export default function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  return (
    <ul className="flex gap-2 flex-wrap">
      <li>
        <img src={imageUrl} alt="" className="aspect-square w-24" />
      </li>
    </ul>
  );
}

export async function loader({ params }) {
  const van = await getVan(params.id);
  return { van };
}
