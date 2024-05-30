import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "../../../api/query.client";
import { Button, Spinner } from "../../../components/ui";
import { useNavigate } from "react-router-dom";
import {
  CreateSpecialiteSchemaType,
  createSpecialiteSchema,
} from "../../../models/specialites/specialite.validation";
import {
  GET_SPECIALITES_KEY,
  createSpecialite,
} from "../../../models/specialites/specialite.service";

export const SpecialiteCreateForm = () => {
  const navigate = useNavigate();

  /**
   * Api Mutations
   */
  const specialitetMutation = useMutation({
    mutationFn: (data: CreateSpecialiteSchemaType) => createSpecialite(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_SPECIALITES_KEY],
      });
      navigate("/specialites");
    },
  });
  /**
   * Form hook
   */
  const { handleSubmit, register, formState } =
    useForm<CreateSpecialiteSchemaType>({
      resolver: zodResolver(createSpecialiteSchema),
    });

  return (
    <form
      onSubmit={handleSubmit((data) => specialitetMutation.mutate(data))}
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
      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          size="sm"
          paint="primary"
          className="btn btn-sm btn-primary"
          disabled={specialitetMutation.isPending}
        >
          {specialitetMutation.isPending && <Spinner size="xs" />}
          <span>Submit</span>
        </Button>
      </div>
    </form>
  );
};
