import { FaSpinner } from 'react-icons/fa'

export default function RootLoading (): React.ReactElement {
  return (
    <div className="py-4">
      <FaSpinner className="animate-spin mx-auto text-4xl" />
    </div>
  )
}
