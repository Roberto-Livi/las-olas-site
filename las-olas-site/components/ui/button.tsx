import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
};

const cn = (...classes: Array<string | null | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap text-center";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-teal-700 text-white shadow-sm hover:bg-teal-900 focus-visible:outline-teal-700",
  ghost: "bg-transparent text-charcoal hover:text-teal-900 focus-visible:outline-teal-700",
  outline:
    "border border-charcoal/15 bg-white text-charcoal hover:border-teal-700/40 hover:text-teal-900 focus-visible:outline-teal-700",
};

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      children,
      variant = "default",
      type = "button",
      ...props
    },
    ref
  ) => {
    const classes = cn(baseClasses, variantClasses[variant], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
        ref: ref as React.Ref<any>,
        ...(props as any),
      });
    }

    return (
      <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} type={type} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
