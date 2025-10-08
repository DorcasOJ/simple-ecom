import UserSideBar from '@src/components/layout/UserSideBar'
import { MessageSquare, Phone, HelpCircle, CreditCard, Store, Star } from "lucide-react";
import conversations from "../../data/conversations.json"

const CustomerSupport = () => {
  const quickHelp = [
    { icon: HelpCircle, title: "Where is my Order", desc: "Track your current and past orders", color: "text-red-500" },
    { icon: HelpCircle, title: "How to cancel an order?", desc: "Learn about our cancellation policy" },
    { icon: HelpCircle, title: "Report an issue", desc: "Report problems with orders or deliveries" },
    { icon: CreditCard, title: "Payment problems", desc: "Get help with payment and billing issues" },
    { icon: Store, title: "Store availability", desc: "Check which stores deliver to your area" },
    { icon: Star, title: "Rate & Review", desc: "Share feedback about your experience" },
  ];
  return (
    <UserSideBar>
      <div>


        <div className="min-h-screen p-6 text-gray-800">
          <h1 className="text-2xl font-semibold mb-6">Customer Support</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Live Chat */}
              <div className="shadow-sm rounded-xl p-5 flex flex-col items-center justify-center text-center">
                <MessageSquare className="w-12 h-12 text-gray-600 mb-3" />
                <h2 className="text-lg font-medium">Live Chat</h2>
                <p className="text-sm text-gray-500 mb-4">Start a conversation with our support team</p>
                <button className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/50">
                  Start Chat
                </button>
              </div>

              {/* Call Support */}
              <div className="border rounded-xl p-5 bg-white flex flex-col items-center justify-center text-center">
                <Phone className="w-12 h-12 text-gray-600 mb-3" />
                <h2 className="text-lg font-medium">Call Support</h2>
                <p className="text-sm text-gray-500 mb-4">Speak directly with a support agent</p>
                <button className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100">
                  Call Now
                </button>
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Recent Conversations</h3>

              <div className="space-y-3">
                {conversations.map((chat, i) => (
                  <div
                    key={i}
                    className="border rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
                  >
                    <h4 className="font-medium">{chat.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{chat.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Agent {chat.agent} • {chat.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-1 space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Help</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {quickHelp.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 border rounded-lg bg-white hover:shadow-sm transition"
                  >
                    <item.icon className={`w-5 h-5 mt-1 ${item.color || "text-gray-600"}`} />
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
}
      </div>
    </UserSideBar>
  )
}

export default CustomerSupport

