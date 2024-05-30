import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "../../../api/query.client";
import { Button, Spinner } from "../../../components/ui";
import { useNavigate } from "react-router-dom";
import {
  GET_GROUPES_KEY,
  createGroupe,
} from "../../../models/groupes/groupe.service";
import {
  CreateGroupeSchemaType,
  createGroupeSchema,
} from "../../../models/groupes/groupe.validation";

export const GroupeCreateForm = () => {
  const navigate = useNavigate();

  /**
   * Api Mutations
   */
  const groupeMutation = useMutation({
    mutationFn: (data: CreateGroupeSchemaType) => createGroupe(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_GROUPES_KEY],
      });
      navigate("/posts");
    },
  });

  /**
   * Form hook
   */
  const { handleSubmit, register, formState } = useForm<CreateGroupeSchemaType>(
    {
      resolver: zodResolver(createGroupeSchema),
    }
  );

  return (
    <form
      onSubmit={handleSubmit((data) => groupeMutation.mutate(data))}
      className="space-y-4"
    >
      {/* Name */}
      <label className="form-control w-full">
        <div className="flex items-center justify-between space-x-8">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full input-sm"
              placeholder="Name"
              {...register("nom")}
            />
          </label>
        </div>
        <div className="label">
          <span className="label-text"></span>
          <span className="label-text-alt text-error">
            {formState?.errors?.nom?.message || ""}
          </span>
        </div>
      </label>
      {/* select */}
      {/* select */}
      <div className="flex flex-row space-x-4">
        <select
          {...register("niveau")}
          className="select select-bordered w-full "
        >
          <option value={0} disabled selected>
            Niveau
          </option>
          <option value={1}>1 CAP</option>
          <option value={2}>2 CAP</option>
          <option value={3}>1 BTP</option>
          <option value={4}>2 BTP</option>
          <option value={5}>1 BTS</option>
          <option value={6}>1 BTS</option>
        </select>

        <select
          {...register("specialite_id")}
          className="select select-bordered w-full "
        >
          <option value={0} disabled selected>
            specialite
          </option>
          <option value={1}>informatique de gestion</option>
          <option value={2}>multimidias</option>
          <option value={3}>logistique</option>
        </select>
      </div>
      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          size="sm"
          paint="primary"
          className="btn btn-sm btn-primary"
          disabled={groupeMutation.isPending}
        >
          {groupeMutation.isPending && <Spinner size="xs" />}
          <span>Submit</span>
        </Button>
      </div>
    </form>
  );
};
