import { useQuery } from "@tanstack/react-query";
import { GET_POSTS_KEY, getPosts } from "../../../models/posts/post.service";
import { LoadingPage } from "../../../components/ui";
import { PostCard } from "../../posts/components";

export const HomePage = () => {
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
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Home Page</h1>
      </div>
      <div className="flex flex-col items-center w-[50%] justify-center gap-4">
        {posts?.data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
