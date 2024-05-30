import { Link } from "../../../components/ui";
import { PostModel } from "../../../models/posts/post.types";

interface StudentCardProps {
  post: PostModel;
}
export const StudentCard: React.FC<StudentCardProps> = ({ post }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <h2 className="text-xs font-bold">{post.author.first_name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/posts/details/${post.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};
