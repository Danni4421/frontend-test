interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  colorType,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`border-none text-white ${_getButtonColor(
        colorType ?? "primary"
      )} ${className}`}
    >
      <span
        className={`${_getButtonTextColor(colorType ?? "primary")} text-md`}
      >
        {children}
      </span>
    </button>
  );
}

const _getButtonColor = (colorType: string) => {
  switch (colorType) {
    case "primary":
      return "bg-primary-base";
    case "secondary":
      return "bg-secondary-base";
    case "danger":
      return "bg-danger-base";
    default:
      return "bg-primary-base";
  }
};

const _getButtonTextColor = (colorType: string) => {
  switch (colorType) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-black";
    case "danger":
      return "text-white";
    default:
      return "text-white";
  }
};
