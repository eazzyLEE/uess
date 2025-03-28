import { Spinner } from "./Spinner"
import { ButtonProps } from "./types"

export const Button = ({ className = "", ...props }: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={props.isLoading}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md ${!props.isLoading && "hover:bg-blue-600 mt-4 transition-colors"} ${props.isLoading && "flex items-center justify-center bg-gray-300"} ${className}`}
    >
      {props.isLoading ? (
        <>
          <Spinner className="border-white mr-2" />
          <span>Submitting...</span>
        </>
      ) : (
        <span>Submit</span>
      )}
    </button>
)
}