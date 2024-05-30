import { PostModel } from "../../../models/posts/post.types";

interface PostCardProps {
  post: PostModel;
}
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-xs font-bold">
          {post.author.first_name} {post.author.last_name}
        </h1>
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
