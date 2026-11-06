import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonStyle = {
  variant?: "primary" | "secondary";
  className?: string;
};

function buttonClass(variant: ButtonStyle["variant"], className: string) {
  return `site-button site-button--${variant ?? "primary"} ${className}`.trim();
}

type ButtonProps = ComponentProps<"button"> & ButtonStyle;

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonClass(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & ButtonStyle;

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}
