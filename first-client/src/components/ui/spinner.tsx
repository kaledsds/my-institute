import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../common/utils/cn";

const spinnerVariants = cva("loading", {
  variants: {
    variant: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      infinity: "loading-infinity",
    },
    paint: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      netural: "text-neutral",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
    },
  },
  defaultVariants: {
    variant: "infinity",
    paint: "primary",
    size: "sm",
  },
});

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}
export const Spinner: React.FC<SpinnerProps> = ({
  className,
  variant,
  paint,
  size,
}) => {
  return (
    <span
      className={cn(spinnerVariants({ variant, paint, size, className }))}
    />
  );
};
