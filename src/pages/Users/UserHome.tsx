
import UserSideBar from "@src/components/layout/UserSideBar"
import { ROUTES } from "@src/routes"
import { MapPinXInside } from "lucide-react"
import { Link } from "react-router-dom"
import data from "../../data/shops.json"
import storeData from "../../data/stores.json"
import ShopRow from "@src/components/user/ShopRow"
import HomeRecentOrder from "@src/components/user/HomeRecentOrder"


const UserHome = () => {
  return (
    <UserSideBar>
      <div className="w-full ">

        <div className="h-30 w-full bg-primary rounded-lg flex items-end justify-start mb-5">

          <p className="text-white text-xs flex items-center gap-x-1 p-3">
            <span>
              <MapPinXInside size={"15px"} />
            </span>
            <span className="text-white/80">
              Delivering to: 123 Main St, City,
            </span>
            <Link to={ROUTES.USERS_HOME} className="">Change</Link>
          </p>
        </div>


        <div>
          <ShopRow data={data} title="Shop by Category" row={true} />
        </div>

        <div className="flex flex-col gap-4 mt-5 xl:flex-row">
          <div className="flex-3">
            <ShopRow data={storeData} title="Popular Stores" row={false} />
          </div>

          <div className="flex-1 mt-13">
            <HomeRecentOrder />
          </div>
        </div>


      </div>
    </UserSideBar >
  )
}

export default UserHome


