import { useDesignerContext } from "../../hooks/useDesignerContext";
import { WarningTexts } from "../utils/helpers/regexExpConfig";
import Warning from "./Warning";

type InputTextProps<T> = {
  value: string;
  name: string;
  placeholder: string;
  type?: "name" | "text" | "email" | "tel";
  required?: boolean;
  classNames?: string;
  pattern?: string;
  validEmail?: boolean;
  id: string;
  disabled?: boolean;
  setInputText: React.Dispatch<React.SetStateAction<T>>;
};

export default function InputText<K>({
  value,
  id,
  pattern,
  placeholder,
  classNames,
  name,
  setInputText,
  required = false,
  type = "text",
  disabled = false,
  validEmail,
}: InputTextProps<K>) {
  const { appModals } = useDesignerContext() as DesignerContextProps;

  const defaultClassNames = classNames ?? "p-2";
  const textMsg = !validEmail ? "invalid-email" : "conflict";

  return (
    <div className="w-full relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        pattern={pattern ?? ""}
        required={required}
        autoComplete="off"
        disabled={disabled}
        className={`font-montserrat border-1 border-fdt-grey-normal placeholder:text-fdt-grey-dark placeholder:text-base rounded-md w-full text-base bg-inherit focus:outline-1   ${defaultClassNames} p-2`}
        onChange={(e) =>
          setInputText((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />

      {type === "email" &&
      appModals.signup === "OPEN" &&
      value &&
      !validEmail ? (
        <Warning text={WarningTexts[textMsg]} />
      ) : null}
    </div>
  );
}
