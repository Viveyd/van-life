import { useOutletContext } from "react-router-dom";
import { getVan } from "../scripts";

export default function HostVanDetails() {
  const { name, type, description } = useOutletContext();

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div>
        <span className="font-bold">Name:</span> <span> {name} </span>
      </div>
      <div>
        <span className="font-bold">Category:</span>{" "}
        <span className="capitalize"> {type} </span>
      </div>
      <div>
        <span className="font-bold">Description:</span>{" "}
        <p className="inline"> {description} </p>
      </div>
      <div>
        <span className="font-bold">Visibility: </span>
        <span>Public</span>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const van = await getVan(params.id);
  return { van };
}
