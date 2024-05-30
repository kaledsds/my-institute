import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "../../../api/query.client";
import { Button, Spinner } from "../../../components/ui";
import { useNavigate } from "react-router-dom";
import { SpecialiteModel } from "../../../models/specialites/specialite.types";
import {
  UpdateSpecialiteSchemaType,
  updateSpecialiteSchema,
} from "../../../models/specialites/specialite.validation";
import {
  GET_SPECIALITE_KEY,
  updateSpecialite,
} from "../../../models/specialites/specialite.service";

interface SpecialiteUpdateFormProps {
  specialite: SpecialiteModel;
}

export const SpecialiteUpdateForm: React.FC<SpecialiteUpdateFormProps> = ({
  specialite,
}) => {
  const navigate = useNavigate();

  /**
   * Api Mutations
   */
  const specialiteMutation = useMutation({
    mutationFn: (data: UpdateSpecialiteSchemaType) =>
      updateSpecialite(specialite.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_SPECIALITE_KEY],
      });
      navigate(`/specialites/details/${specialite.id}`);
    },
  });
  /**
   * Form hook
   */
  const { handleSubmit, register, formState } =
    useForm<UpdateSpecialiteSchemaType>({
      resolver: zodResolver(updateSpecialiteSchema),
      defaultValues: {
        nom: specialite.nom,
      },
    });

  return (
    <form
      onSubmit={handleSubmit((data) => specialiteMutation.mutate(data))}
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
          disabled={specialiteMutation.isPending}
        >
          {specialiteMutation.isPending && <Spinner size="xs" />}
          <span>Submit</span>
        </Button>
      </div>
    </form>
  );
};
