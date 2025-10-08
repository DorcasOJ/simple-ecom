
import { FaComments, FaPhone, FaStar } from 'react-icons/fa'

const DispatchCard = () => {
    return (
        <div className="w-full max-w-xs rounded-xl dark:bg-base-200/30  p-4 shadow-sm flex flex-col items-center hover:shadow-md">
            <h5 className="font-semibold text-gray-700 mb-3">Your Dispatcher</h5>
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-medium text-gray-800">John Doe</p>
            <p className="flex items-center text-sm text-gray-500 gap-1">
                <FaStar className="text-yellow-400" /> 4.8 Rating
            </p>

            <div className="w-32 h-10 bg-gray-300 mt-3 rounded-lg"></div>

            <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-2 px-3 py-2  rounded-lg btn btn-outline">
                    <FaPhone className="text-gray-600" />
                    <span className="text-sm font-medium">Call</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg btn btn-outline">
                    <FaComments className="text-gray-600" />
                    <span className="text-sm font-medium">Chat</span>
                </button>
            </div>
        </div>
    )
}

export default DispatchCard
