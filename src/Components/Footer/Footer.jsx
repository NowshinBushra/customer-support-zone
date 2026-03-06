
const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 mt-16">

            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-3">
                        CS — Ticket System
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-400">
                        CS Ticket System is a modern support management
                        platform that allows teams to track, prioritize,
                        and resolve customer issues efficiently while
                        improving communication and productivity.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Sales</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>

                    <ul className="space-y-3 text-sm">

                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            {/* <FaXTwitter /> */}
                            @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            {/* <FaLinkedinIn /> */}
                            @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            {/* <FaFacebookF /> */}
                            @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            {/* <FaEnvelope /> */}
                            support@cst.com
                        </li>

                    </ul>
                </div>

            </div>
            <div className="border-t border-gray-700 text-center text-sm py-4 text-gray-400">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;