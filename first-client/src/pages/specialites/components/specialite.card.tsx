import { Link } from "../../../components/ui";
import { SpecialiteModel } from "../../../models/specialites/specialite.types";

interface SpecialiteCardProps {
  specialite: SpecialiteModel;
}
export const SpecialiteCard: React.FC<SpecialiteCardProps> = ({
  specialite,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{specialite.nom}</h2>
        <div className="card-actions justify-end">
          <Link to={`/posts/details/${specialite.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};
