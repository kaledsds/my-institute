import { SpecialiteCreateForm } from "../components";

export const SpecialiteCreatePage = () => {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Create new Specialite</h1>
      </div>
      <SpecialiteCreateForm />
    </div>
  );
};
