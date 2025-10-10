'use dom';
import "@styles/global.css";



const Footer = () => {
    return (
        <footer className="text-base-content p-10 pb-25 flex flex-col gap-2 sm:grid grid-cols-4 sm:gap-5">
            <nav className="flex flex-col gap-y-2 sm:gap-y-3 ">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col gap-y-2 sm:gap-y-3 ">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col gap-y-2 sm:gap-y-3 ">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form className="flex flex-col gap-y-2 sm:gap-y-3 ">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="flex flex-wrap mt-3 h-7 max-h-7">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="max-w-[130px] placeholder:text-xs rounded-l-md p-1 h-full" />
                        <button className="text-sm bg-secondary-0 text-white rounded-r-md py-1 px-2 h-full">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer
