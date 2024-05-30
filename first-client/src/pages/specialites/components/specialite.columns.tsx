import { Eye } from "lucide-react";
import { ColumnProps } from "../../../components/blocs/data-table/data-table.types";
import { Link } from "../../../components/ui";
import { SpecialiteModel } from "../../../models/specialites/specialite.types";

export const SpecialiteColumns: ColumnProps<SpecialiteModel>[] = [
  {
    key: "nom",
    title: "nom",
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
            to={`/specialites/details/${record.id}`}
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      );
    },
  },
];
