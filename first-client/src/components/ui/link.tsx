import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../common/utils/cn";
import { Link as LinkRRD, LinkProps as LinkRRDProps } from "react-router-dom";

const linkVariants = cva("btn", {
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
    paint: "link",
    size: "sm",
    shape: "default",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkRRDProps,
    VariantProps<typeof linkVariants> {
  to: string;
  wide?: boolean;
  noAnimation?: boolean;
  isBlock?: boolean;
}
export const Link: React.FC<LinkProps> = ({
  to,
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
    <LinkRRD
      to={to}
      className={cn(
        linkVariants({ variant, shape, paint, size, className }),
        wide && "btn-wide",
        noAnimation && "no-animation",
        isBlock && "btn-block"
      )}
      {...props}
    />
  );
};
