import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Link, LoadingPage, Spinner } from "../../../components/ui";
import {
  GET_SPECIALITE_KEY,
  deleteSpecialite,
  getSpecialitetById,
} from "../../../models/specialites/specialite.service";

export const SpecialiteDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  /**
   * Api Mutations
   */
  const deleteSpecialiteMutation = useMutation({
    mutationFn: () => deleteSpecialite(id!),
    onSuccess: () => {
      navigate("/specialites");
    },
  });

  /**
   * Api Queries
   */
  const { data: specialite, status } = useQuery({
    queryKey: [GET_SPECIALITE_KEY],
    queryFn: () => getSpecialitetById(id!),
  });

  if (status === "pending") {
    return <LoadingPage />;
  }

  return (
    <div className="p-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{specialite?.data.nom}</h2>
        </div>
        <div className="card-actions justify-end p-4">
          <Link to={`/specialites/edit/${specialite?.data.id}`} paint="primary">
            Edit
          </Link>
          <Button
            onClick={() => deleteSpecialiteMutation.mutate()}
            disabled={deleteSpecialiteMutation.isPending}
          >
            {deleteSpecialiteMutation.isPending && <Spinner size="xs" />}
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
