import { useQuery } from "@tanstack/react-query";
import { LoadingPage } from "../../../components/ui";
import { SpecialiteUpdateForm } from "../components";
import { useParams } from "react-router-dom";
import {
  GET_SPECIALITE_KEY,
  getSpecialitetById,
} from "../../../models/specialites/specialite.service";

export const SpecialiteUpdatePage = () => {
  const { id } = useParams();

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

  if (!specialite?.data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Create new post</h1>
      </div>
      <SpecialiteUpdateForm specialite={specialite.data} />
    </div>
  );
};
