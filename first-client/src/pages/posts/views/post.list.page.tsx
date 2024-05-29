import { useQuery } from "@tanstack/react-query";
import { GET_POSTS_KEY, getPosts } from "../../../models/posts/post.service";
import { Link, LoadingPage } from "../../../components/ui";
import { Plus } from "lucide-react";
import { PostCard } from "../components";

export const PostListPage = () => {
  /**
   * Api Queries
   */
  const { data: posts, status } = useQuery({
    queryKey: [GET_POSTS_KEY],
    queryFn: getPosts,
  });

  if (status === "pending") {
    return <LoadingPage />;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Post list</h1>
        <Link to="/posts/create" paint="primary">
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts?.data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
