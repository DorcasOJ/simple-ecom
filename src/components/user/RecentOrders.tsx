import orders from "../../data/recentOrders.json";

const RecentOrders = () => {

    //     useEffect(() => {
    //   fetch("/orders.json")
    //     .then((res) => res.json())
    //     .then((data) => setOrders(data));
    // }, []);

    return (
        <div className="p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Orders</h3>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 sm:gap-6 ">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="hover:shadow-md rounded-xl bg-white shadow-sm p-3 flex flex-col justify-between max-w-[300px]"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-gray-700">
                                Order <span className="font-semibold">#{order.id}</span>
                            </p>
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                                Delivered
                            </span>
                        </div>

                        {/* ORDER INFO */}
                        <div className="flex items-center gap-3 mt-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                            <div>
                                <h4 className="text-gray-800 font-medium text-sm">
                                    {order.store}
                                </h4>
                                <p className="text-xs text-gray-600">
                                    {order.items} items • {order.price}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Delivered {order.delivered}
                                </p>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex justify-between items-center mt-4">
                            <button className="px-4 py-1.5 border rounded-lg text-sm font-medium btn btn-ghost text-primary">
                                Reorder
                            </button>
                            <button className="px-4 py-1.5 btn  btn-ghost rounded-lg text-sm font-medium text-gray-700 ">
                                Rate
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentOrders
