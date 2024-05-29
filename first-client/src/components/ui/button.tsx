import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../common/utils/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "",
      outline: "btn-outline",
    },
    shape: {
      default: "",
      square: "btn-square",
      circle: "btn-circle",
    },
    paint: {
      default: "",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      netural: "btn-neutral",
      ghost: "btn-ghost",
      link: "btn-link",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    paint: "default",
    size: "sm",
    shape: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  wide?: boolean;
  noAnimation?: boolean;
  isBlock?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  shape,
  paint,
  size,
  wide,
  noAnimation,
  isBlock,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, shape, paint, size, className }),
        wide && "btn-wide",
        noAnimation && "no-animation",
        isBlock && "btn-block"
      )}
      {...props}
    />
  );
};
