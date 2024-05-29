import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";
import { useAuth } from "../../../models/auth/hooks";
import {
  LoginUserSchemaType,
  loginUserSchema,
} from "../../../models/auth/auth.validation";
import { useForm } from "react-hook-form";
import { Link } from "../../../components/ui";

export const AuthLoginPage = () => {
  const { signIn, signInStatus } = useAuth();

  /**
   * Form hook
   */
  const { handleSubmit, register, formState } = useForm<LoginUserSchemaType>({
    resolver: zodResolver(loginUserSchema),
  });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-row bg-base-300 rounded-xl">
        <img
          src="/images/auth.jpg"
          className="rounded-l-xl"
          width={300}
          alt=""
        />
        <form
          className="p-12 w-[30vw]"
          onSubmit={handleSubmit((data) => signIn(data))}
        >
          <div className="flex p-5 items-center justify-center space-x-8">
            <h1 className="font-bold text-3xl">Login</h1>
          </div>
          {/* Email */}
          <label className="form-control w-full">
            <div className="flex items-center justify-between space-x-8">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <Mail className="w-4 h-4" />
                <input
                  type="text"
                  className="w-full input-sm"
                  placeholder="Email"
                  {...register("email")}
                />
              </label>
            </div>
            <div className="label">
              <span className="label-text"></span>
              <span className="label-text-alt text-error">
                {formState?.errors?.email?.message || ""}
              </span>
            </div>
          </label>
          {/* Password */}
          <label className="form-control w-full">
            <div className="flex items-center justify-between space-x-8">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <KeyRound className="w-4 h-4" />
                <input
                  type="password"
                  className="w-full input-sm"
                  placeholder="Password"
                  {...register("password")}
                />
              </label>
            </div>
            <div className="label">
              <span className="label-text"></span>
              <span className="label-text-alt text-error">
                {formState?.errors?.password?.message || ""}
              </span>
            </div>
          </label>
          <div className="flex justify-between gap-2 p-4 items-center">
            <Link size="md" to="/register">
              Dont have an account!
            </Link>
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              disabled={signInStatus === "pending"}
            >
              {signInStatus === "pending" && (
                <span className="loading loading-spinner"></span>
              )}
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
