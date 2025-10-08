
const ActiveOrder = () => {
    return (
        <div className='flex-1 hover:shadow-md rounded-xl bg-gray-50 dark:bg-base-200 p-4 shadow-sm'>
            <span>Active</span>
            <div className="w-full">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-gray-700">
                            Order <span className="text-gray-900">#54321</span>
                        </h3>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded">
                        In Progress
                    </span>
                </div>

                {/* Store Info */}
                <div className="flex items-center gap-3 mt-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                    <div>
                        <h4 className="font-medium text-gray-800">FreshMart Grocery</h4>
                        <p className="text-sm text-gray-600">5 items • ₦9,750.99</p>
                        <p className="text-xs text-gray-500">Ordered 10 minutes ago</p>
                    </div>
                </div>

                {/* Order Progress */}
                <div className="mt-5">
                    <h5 className="text-sm font-semibold mb-2 text-gray-700">
                        Order Progress
                    </h5>
                    <ul className="space-y-1 text-sm">
                        <li className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                Order Confirmed
                            </span>
                            <span className="text-gray-500 text-xs">2:30pm</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                                Dispatch Assigned
                            </span>
                            <span className="text-gray-500 text-xs">2:35pm</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                                Shopping In Progress
                            </span>
                            <span className="text-gray-500 text-xs">3:10pm</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                            On the way
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                            Delivered
                        </li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 text-xs text-gray-600">
                    <p>Estimated delivery time: <b>40–45 mins</b></p>
                    <a href="#" className="text-primary font-medium">Track Live</a>
                </div>
            </div>
        </div>

    )
}

export default ActiveOrder
