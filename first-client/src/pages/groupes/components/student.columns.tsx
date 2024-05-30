import { Eye } from "lucide-react";
import { ColumnProps } from "../../../components/blocs/data-table/data-table.types";
import { Link } from "../../../components/ui";
import { PostModel } from "../../../models/posts/post.types";

export const GroupeColumns: ColumnProps<PostModel>[] = [
  {
    key: "title",
    title: "Title",
  },
  {
    key: "content",
    title: "Content",
  },
  {
    key: "action",
    title: "Author",
    render: (_, record) => {
      return (
        <div className="text-blue-500 font-bold">
          <Link
            shape="circle"
            paint="ghost"
            size="xs"
            to={`/posts/details/${record.id}`}
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      );
    },
  },
];
