import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // icon pack
import { ROUTES } from "../routes";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            <div className="max-w-md">
                {/* Illustration / Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-primary p-6 rounded-full">
                        <ShoppingCart className="h-16 w-16 text-primary-content" />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-7xl font-extrabold text-base-content">
                    404
                </h1>

                {/* Message */}
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Oops! The page you’re looking for doesn’t exist.
                    Maybe it was removed or the link is broken.
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to={ROUTES.LANDING}
                        className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/50 transition"
                    >
                        🏬 Back to Shop
                    </Link>
                    <Link
                        to="/cart"
                        className="px-6 py-3 bg-accent text-gray-900 dark:text-gray-100 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        View Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}
