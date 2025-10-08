import DispatchSideBar from '@src/components/layout/DispatchSideBar'
import { ROUTES } from '@src/routes'
import { MapPinXInside } from 'lucide-react'
import { Link } from 'react-router-dom'

const DispatchHome = () => {
    return (
        <DispatchSideBar>
            <div className='w-full'>
                
                <div className="h-30 w-full bg-primary rounded-lg flex items-end justify-start mb-5">

                    <p className="text-white text-xs flex items-center gap-x-1 p-3">
                        <span>
                            <MapPinXInside size={"15px"} />
                        </span>
                        <span className="text-white/80">
                            Delivering to: 123 Main St, City,
                        </span>
                        <Link to={ROUTES.DISPATCH_HOME} className="">Change</Link>
                    </p>
                </div>

            </div>
        </DispatchSideBar>
    )
}

export default DispatchHome
