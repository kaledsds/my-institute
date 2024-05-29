import { Spinner } from "./spinner";

export const LoadingPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};
