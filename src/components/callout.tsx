import { cn } from "~/lib/utils";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 px-6", {
        "border-red-900": type === "danger",
        "border-yellow-900": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mx-2 my-6 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
