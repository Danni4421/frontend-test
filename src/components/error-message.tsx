interface ErrorMessageProps {
  message?: string | undefined;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return message ? (
    <p className="text-red-500 text-sm mt-3">{message}</p>
  ) : null;
}
