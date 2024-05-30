import { useQuery } from "@tanstack/react-query";
import { LoadingPage } from "../../../components/ui";
import { GroupeUpdateForm } from "../components";
import { GET_POST_KEY, getPostById } from "../../../models/posts/post.service";
import { useParams } from "react-router-dom";

export const GroupeUpdatePage = () => {
  const { id } = useParams();

  /**
   * Api Queries
   */
  const { data: post, status } = useQuery({
    queryKey: [GET_POST_KEY],
    queryFn: () => getPostById(id!),
  });

  if (status === "pending") {
    return <LoadingPage />;
  }

  if (!post?.data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Create new post</h1>
      </div>
      <GroupeUpdateForm post={post.data} />
    </div>
  );
};
