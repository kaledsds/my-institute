import { GroupeCreateForm } from "../components";

export const GroupeCreatePage = () => {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Create new groupes</h1>
      </div>
      <GroupeCreateForm />
    </div>
  );
};
