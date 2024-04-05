type ButtonProps = {
  px: string;
  py: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  classNames?: string;
  isLoading?: boolean;
};
export const Buttons = ({
  children,
  onClick,
  px = "px-4",
  py = "py-2",
  classNames,
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-[4px] border-0 text-base hover:opacity-90 active:opactiy-100 focus:outline-0 transition-opacity ${px} ${py} ${classNames}`}
    >
      {isLoading ? "In Progress..." : children}
    </button>
  );
};
