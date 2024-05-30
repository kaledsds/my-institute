import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  GET_POST_KEY,
  deletePost,
  getPostById,
} from "../../../models/posts/post.service";
import { Button, Link, LoadingPage, Spinner } from "../../../components/ui";

export const StudentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  /**
   * Api Mutations
   */
  const deletePostMutation = useMutation({
    mutationFn: () => deletePost(id!),
    onSuccess: () => {
      navigate("/posts");
    },
  });

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

  return (
    <div className="p-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{post?.data.title}</h2>
          <p>{post?.data.content}</p>
          <h2 className="text-xs font-bold">{post?.data.author.first_name}</h2>
        </div>
        <div className="card-actions justify-end p-4">
          <Link to={`/posts/edit/${post?.data.id}`} paint="primary">
            Edit
          </Link>
          <Button
            onClick={() => deletePostMutation.mutate()}
            disabled={deletePostMutation.isPending}
          >
            {deletePostMutation.isPending && <Spinner size="xs" />}
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
