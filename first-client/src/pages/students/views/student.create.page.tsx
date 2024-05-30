import { StudentCreateForm } from "../components";

export const StudentCreatePage = () => {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Create new post</h1>
      </div>
      <StudentCreateForm />
    </div>
  );
};
