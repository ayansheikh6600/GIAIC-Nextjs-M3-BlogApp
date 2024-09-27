import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
            <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <Link href="/" className="hover:underline">
                       LOGO
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className="hover:underline me-4 md:me-6">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/produts" className="hover:underline me-4 md:me-6">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer