import UserSideBar from '@src/components/layout/UserSideBar'
import ActiveOrder from '@src/components/user/ActiveOrder';
import RecentOrders from '@src/components/user/RecentOrders';
import { FaPhone, FaComments, FaStar } from "react-icons/fa";
import DispatchCard from './DispatchCard';



const OrderTracking = () => {
    return (
        <UserSideBar>
            <div className="w-full ">

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl p-4 items-start justify-start">
                    {/* ORDER CARD */}

                    <ActiveOrder />

                    {/* DISPATCHER CARD */}
                    <DispatchCard />

                </div>

                <div>
                    <RecentOrders />
                </div>


            </div>
        </UserSideBar>
    )
}

export default OrderTracking
