import { useQuery } from "@tanstack/react-query";
import { Link, LoadingPage } from "../../../components/ui";
import { Plus } from "lucide-react";
import { DataTable } from "../../../components/blocs/data-table/data-table";
import { SpecialiteColumns } from "../components/specialite.columns";
import {
  GET_SPECIALITES_KEY,
  getSpecialites,
} from "../../../models/specialites/specialite.service";

export const SpecialiteListPage = () => {
  /**
   * Api Queries
   */
  const { data: specialites, status } = useQuery({
    queryKey: [GET_SPECIALITES_KEY],
    queryFn: getSpecialites,
  });

  if (status === "pending") {
    return <LoadingPage />;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Specialite list</h1>
        <Link to="/specialites/create" paint="primary">
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>
      </div>
      <DataTable data={specialites?.data} columns={SpecialiteColumns} />
      {/* <div className="grid grid-cols-3 gap-4">
        {posts?.data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div> */}
    </div>
  );
};
