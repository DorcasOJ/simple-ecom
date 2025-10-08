

const HomeRecentOrder = () => {
    return (
        <div className="pb-5">
            <h2>Recent Orders</h2>

            <div className="flex flex-wrap gap-5 mt-3">

                <div className="border border-base-content/20 rounded-md shadow-sm p-2">
                    <div className="flex flex-wrap gap-x-2 max-w-xs">

                        <div className="w-14 h-14 rounded-md overflow-hidden border border-base-content/20">

                        </div>
                        <div className="flex flex-col items-center justify-center pe-3">
                            <h5 className="text-xs font-medium ">Order from FreshMart</h5>
                            <p className="text-xs text-gray-500">
                                Delivered - 1 days ago
                            </p>
                        </div>
                    </div>
                    <div className="p-3 max-w-sm">
                        <button className="btn btn-outline btn-sm text-primary w-full">Reorder</button>
                    </div>
                </div>

                <div className="border border-base-content/20 rounded-md shadow-sm p-2">
                    <div className="flex flex-wrap gap-x-2 max-w-xs">

                        <div className="w-14 h-14 rounded-md overflow-hidden border border-base-content/20">

                        </div>
                        <div className="flex flex-col items-center justify-center pe-3">
                            <h5 className="text-xs font-medium ">Order from FreshMart</h5>
                            <p className="text-xs text-gray-500">
                                Delivered - 1 days ago
                            </p>
                        </div>
                    </div>
                    <div className="p-3 max-w-sm">
                        <button className="btn btn-outline btn-sm text-primary w-full">Reorder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRecentOrder
