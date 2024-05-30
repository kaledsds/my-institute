import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  CreatePostSchemaType,
  createPostSchema,
} from "../../../models/posts/post.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "../../../api/query.client";
import { GET_POSTS_KEY, createPost } from "../../../models/posts/post.service";
import { Button, Spinner } from "../../../components/ui";
import { useNavigate } from "react-router-dom";

export const GroupeCreateForm = () => {
  const navigate = useNavigate();

  /**
   * Api Mutations
   */
  const postMutation = useMutation({
    mutationFn: (data: CreatePostSchemaType) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_POSTS_KEY],
      });
      navigate("/posts");
    },
  });
  /**
   * Form hook
   */
  const { handleSubmit, register, formState } = useForm<CreatePostSchemaType>({
    resolver: zodResolver(createPostSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => postMutation.mutate(data))}
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
              {...register("title")}
            />
          </label>
        </div>
        <div className="label">
          <span className="label-text"></span>
          <span className="label-text-alt text-error">
            {formState?.errors?.title?.message || ""}
          </span>
        </div>
      </label>
      {/* Content */}
      <label className="form-control w-full">
        <div className="flex items-center justify-between space-x-8">
          <textarea
            className="w-full textarea textarea-bordered textarea-sm"
            placeholder="Content"
            {...register("content")}
          />
        </div>
        <div className="label">
          <span className="label-text"></span>
          <span className="label-text-alt text-error">
            {formState?.errors?.content?.message || ""}
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
          disabled={postMutation.isPending}
        >
          {postMutation.isPending && <Spinner size="xs" />}
          <span>Submit</span>
        </Button>
      </div>
    </form>
  );
};
