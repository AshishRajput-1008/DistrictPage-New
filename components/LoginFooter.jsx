export default function LoginFooter() {
    return (
        <div className="fixed bottom-0 left-0 w-full border-t bg-white dark:bg-[#1c1c1c] dark:text-white text-center text-xs text-gray-600 p-3 z-50">
            <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 mb-2">
                {/* <li className="flex items-center gap-1">
                    <a
                        href="#"
                        rel="noreferrer"
                        className="hover:text-gray-700"
                    >
                        About Us
                    </a>
                    <span>|</span>
                </li>

                <li className="flex items-center gap-1">
                    <a
                        href="#"
                        rel="noreferrer"
                        className="hover:text-gray-700"
                    >
                        Cookie Policy
                    </a>
                    <span>|</span>
                </li> */}

                <li className="flex items-center gap-1">
                    <a
                        href="privacy-policy"
                        rel="noreferrer"
                        className="hover:text-gray-700"
                    >
                        Privacy Policy
                    </a>
                    <span>|</span>
                </li>

                <li className="flex items-center gap-1">
                    <a
                        href="terms-conditions"
                        rel="noreferrer"
                        className="hover:text-gray-700"
                    >
                        Terms and Conditions
                    </a>
                    <span>|</span>
                </li>

                {/* <li className="flex items-center gap-1">
                    <a
                        href="#"
                        className="hover:text-gray-700"
                    >
                        Refund policy
                    </a>
                    <span>|</span>
                </li> */}
                <li className="flex items-center gap-1">
                    <a
                        href="disclaimer"
                        className="hover:text-gray-700"
                    >
                        Disclaimer
                    </a>
                    <span>|</span>
                </li>

                <li>
                    <a
                        href="contact-us"
                        className="hover:text-gray-700"
                    >
                        Contact Us
                    </a>
                </li>
            </ul>

            <p className="text-[11px] text-gray-400">
                Copyright © 2024–{new Date().getFullYear()} Sadaiv Satya Media. All Rights Reserved
            </p>
        </div >
    );
}
