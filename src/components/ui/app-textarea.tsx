interface Props extends React.HTMLProps<HTMLTextAreaElement> {}

const Textarea = ({...props}: Props) => {
    return <textarea
    className="w-4/5 p-4 my-6 text-base text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
    {...props}
  />
}

export default Textarea;