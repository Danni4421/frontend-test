interface LabeledButtonProps {
  type: "primary" | "warning" | "danger" | "success";
  children: React.ReactNode;
}

export function LabeledButton({ type, children }: LabeledButtonProps) {
  return (
    <span
      className={`py-2 px-4 rounded-full font-semibold ${_getButtonClassName(
        type
      )}`}
    >
      <span>{children}</span>
    </span>
  );
}

function _getButtonClassName(
  type: "primary" | "warning" | "danger" | "success"
) {
  switch (type) {
    case "primary":
      return "bg-blue-100 text-blue-500";
    case "warning":
      return "bg-orange-100 text-orange-500";
    case "danger":
      return "bg-red-100 text-red-500";
    case "success":
      return "bg-emerald-100 text-emerald-500";
  }
}
