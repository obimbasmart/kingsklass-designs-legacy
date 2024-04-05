import { GoCopy } from "react-icons/go"
import { toast } from "react-toastify"

type CopyComponentProps = {
  text: string
  element?: React.ReactNode;
  classNames: string;
  msg: string;
}
export const CopyComponent = ({ text, element, msg, classNames }: CopyComponentProps) => {

  const copyText = async(amount: string) => {
    if (!navigator.clipboard) return alert('Unable to copy')
    await navigator.clipboard.writeText(amount)
    toast.info(msg, {delay: 2000})
  }

  return (
    <div className={`flex mobile:text-xl items-center gap-x-3 font-sans`}>
      <h4 className={`${classNames}`}>{element ?? text}</h4>
      <GoCopy 
      title="copy"
      onClick={() => copyText(text)}
      className="text-gray-600 hover:text-gray-800 transition-colors text-base cursor-pointer" />
    </div>
  )
}