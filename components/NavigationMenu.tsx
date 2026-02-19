// import React from 'react';
// import Link from 'next/link';
// import UserMenu from "@/components/user-menu";

// const NavigationMenu = () => {
//     // Section 1: Home, Video, Search
//     const section1Items = [
//         {
//             title: 'होम',
//             href: '/',
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20.084 20.999H14.7C14.203 20.999 13.8 20.596 13.8 20.099V16.237C13.8 15.834 13.47 15.504 13.067 15.504H10.92C10.522 15.504 10.2 15.826 10.2 16.224V20.083C10.2 20.587 9.788 20.999 9.284 20.999H3.9C3.405 20.999 3 20.594 3 20.099V11.48C3 11.126 3.148 10.789 3.409 10.55L11.398 3.234C11.739 2.922 12.261 2.922 12.602 3.234L20.591 10.55C20.852 10.789 21 11.126 21 11.48V20.084C21 20.587 20.588 20.999 20.084 20.999Z"
//                         className="fill-current" />
//                 </svg>
//             ),
//             active: true,
//         },
//         {
//             title: 'वीडियो',
//             href: '/videos',
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM10.2 8.1L15.7 11.3C16.2 11.6 16.2 12.4 15.7 12.6L10.2 15.8C9.7 16.1 9 15.7 9 15.1V8.8C9 8.2 9.7 7.8 10.2 8.1Z"
//                         className="fill-current" />
//                 </svg>
//             ),
//         },
//         {
//             title: 'सर्च',
//             href: '#',
//             icon: (
// <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org2000/svg">
//     <path d="M12.0668 3.5C9.87467 3.5 7.6825 4.3365 6.0095 6.0095C2.6635 9.3555 2.6635 14.7793 6.0095 18.1253C7.6825 19.7983 9.87467 20.6348 12.0668 20.6348C13.8915 20.6348 15.7115 20.0468 17.2375 18.8883L22.5097 24.1605C22.7372 24.388 23.0358 24.5023 23.3345 24.5023C23.6332 24.5023 23.9318 24.388 24.1593 24.1605L24.1605 24.1593C24.6155 23.7043 24.6155 22.9658 24.1605 22.5108L18.8883 17.2387C21.4398 13.881 21.1913 9.0755 18.1265 6.01067C16.4523 4.3365 14.259 3.5 12.0668 3.5ZM12.0668 18.3003C10.402 18.3003 8.83633 17.6517 7.65917 16.4745C5.229 14.0443 5.229 10.0893 7.65917 7.65917C8.83633 6.482 10.402 5.83333 12.0668 5.83333C13.7317 5.83333 15.2973 6.482 16.4745 7.65917C18.9047 10.0893 18.9047 14.0443 16.4745 16.4745C15.2973 17.6517 13.7317 18.3003 12.0668 18.3003Z"
//         className="fill-current" />
// </svg>
//             ),
//         },
//     ];

//     // Section 2: Web Stories, E-paper
//     const section2Items = [
//         {
//             title: 'वेब स्टोरीज',
//             href: '/web-stories',
//             icon: (
// <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g clipPath="url(#clip0_13121_47813)">
//         <path fillRule="evenodd" clipRule="evenodd" d="M18.6668 2.33203H9.3335C8.71466 2.33203 8.12116 2.57786 7.68358 3.01545C7.246 3.45303 7.00016 4.04653 7.00016 4.66536V23.332C7.00016 23.9509 7.246 24.5444 7.68358 24.9819C8.12116 25.4195 8.71466 25.6654 9.3335 25.6654H18.6668C19.2857 25.6654 19.8792 25.4195 20.3167 24.9819C20.7543 24.5444 21.0002 23.9509 21.0002 23.332V4.66536C21.0002 4.04653 20.7543 3.45303 20.3167 3.01545C19.8792 2.57786 19.2857 2.33203 18.6668 2.33203ZM18.6668 23.332H9.3335V4.66536H18.6668V23.332ZM23.3335 4.66536V23.332C23.9523 23.332 24.5458 23.0862 24.9834 22.6486C25.421 22.211 25.6668 21.6175 25.6668 20.9987V6.9987C25.6668 6.37986 25.421 5.78637 24.9834 5.34878C24.5458 4.9112 23.9523 4.66536 23.3335 4.66536ZM4.66683 4.66536V23.332C4.04799 23.332 3.4545 23.0862 3.01691 22.6486C2.57933 22.211 2.3335 21.6175 2.3335 20.9987V6.9987C2.3335 6.37986 2.57933 5.78637 3.01691 5.34878C3.4545 4.9112 4.04799 4.66536 4.66683 4.66536Z"
//             className="fill-current" />
//     </g>
//     <defs>
//         <clipPath id="clip0_13121_47813">
//             <rect width="28" height="28" fill="white" />
//         </clipPath>
//     </defs>
// </svg>
//             ),
//             external: true,
//         },
//         {
//             title: 'ई-पेपर',
//             href: '#',
//             icon: (
//                 <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M23.107 24.493C23.1817 24.4977 23.2575 24.5 23.3334 24.5C25.263 24.5 26.8334 22.9308 26.8334 21V10.9608C26.8334 9.03117 25.263 7.46083 23.3334 7.46083H22.1259V7C22.1259 5.07033 20.5555 3.5 18.6259 3.5H4.66669C2.73702 3.5 1.16669 5.07033 1.16669 7V21C1.16669 22.9297 2.73702 24.5 4.66669 24.5H22.9764C23.0207 24.5 23.065 24.4977 23.107 24.493ZM22.1259 20.9592V9.793H23.3334C23.9774 9.793 24.5 10.3168 24.5 10.9597V21C24.5 21.644 23.9774 22.1667 23.3334 22.1667C22.6684 22.1667 22.1259 21.6242 22.1259 20.9592ZM3.50002 7C3.50002 6.356 4.02269 5.83333 4.66669 5.83333H18.6247C19.2687 5.83333 19.7914 6.35717 19.7914 7V20.9592C19.7914 21.3827 19.8672 21.7898 20.0037 22.1667H4.66669C4.02269 22.1667 3.50002 21.644 3.50002 21V7ZM6.42374 9.95512H16.8456C17.4826 9.95512 17.9971 9.43245 17.9971 8.78845C17.9971 8.14445 17.4826 7.62179 16.8456 7.62179H6.42374C5.78674 7.62179 5.27224 8.14445 5.27224 8.78845C5.27224 9.43245 5.78674 9.95512 6.42374 9.95512ZM16.8459 16.9668H14.6012C13.9642 16.9668 13.4497 16.4453 13.4497 15.8001C13.4497 15.155 13.9642 14.6335 14.6012 14.6335H16.8459C17.4829 14.6335 17.9974 15.155 17.9974 15.8001C17.9974 16.4453 17.4829 16.9668 16.8459 16.9668ZM14.6012 13.5531H16.8459C17.4829 13.5531 17.9974 13.0304 17.9974 12.3864C17.9974 11.7424 17.4829 11.2198 16.8459 11.2198H14.6012C13.9642 11.2198 13.4497 11.7424 13.4497 12.3864C13.4497 13.0304 13.9642 13.5531 14.6012 13.5531ZM16.8459 20.3782H14.6012C13.9642 20.3782 13.4497 19.8567 13.4497 19.2115C13.4497 18.5664 13.9642 18.0449 14.6012 18.0449H16.8459C17.4829 18.0449 17.9974 18.5664 17.9974 19.2115C17.9974 19.8567 17.4829 20.3782 16.8459 20.3782ZM6.42374 11.2198H10.9142C11.5512 11.2198 12.0657 11.7424 12.0657 12.3864V19.2103C12.0657 19.8554 11.5512 20.3769 10.9142 20.3769H6.42374C5.78674 20.3769 5.27224 19.8554 5.27224 19.2103V12.3864C5.27224 11.7424 5.78674 11.2198 6.42374 11.2198Z"
//                         className="fill-current" />
//                 </svg>
//             ),
//             external: true,
//         },
//     ];

//     // Section 3: Profile (Last)
//     const profileItem = {
//         title: '',
//         href: '#',
//         icon: (
//             <div className="relative flex items-center justify-center">
//                 {/* Profile */}
//                 <svg
//                     viewBox="0 0 28 28"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-8 h-8"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M14 2.33203C7.555 2.33203 2.33203 7.555 2.33203 14C2.33203 20.445 7.555 25.668 14 25.668C20.445 25.668 25.668 20.445 25.668 14C25.668 7.555 20.445 2.33203 14 2.33203ZM14 6.9987C16.21 6.9987 18 8.7887 18 10.9987C18 13.2087 16.21 14.9987 14 14.9987C11.79 14.9987 10 13.2087 10 10.9987C10 8.7887 11.79 6.9987 14 6.9987ZM14 22.3344C11.235 22.3344 8.7235 21.0779 7.16797 19.0929C7.22097 17.0489 11.6665 15.8344 14 15.8344C16.3255 15.8344 20.779 17.0489 20.832 19.0929C19.2765 21.0779 16.765 22.3344 14 22.3344Z"
//                         className="fill-current"
//                     />
//                 </svg>

//                 <svg
//                     viewBox="0 0 12 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute -mr-5 right-0 w-5 h-5"
//                 >
//                     <path
//                         d="M2 4L6 8L10 4"
//                         stroke="currentColor"
//                         strokeWidth="1.8"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             </div>
//         ),
//         isDropdown: true,
//     };

//     // Divider component
//     const Divider = () => (
//         <div className="h-6 w-px bg-gray-300 mx-2 self-center"></div>
//     );


//     // Menu item component में ये बदलाव करें:
//     const MenuItem = ({ item }: { item: any }) => (
//         <li className={`h-12 flex items-center justify-center px-2`}>
//             {item.external ? (
//                 <Link
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={item.title}
//                     className="flex items-center justify-center h-full gap-1 transition-colors group hover:text-red-600"
//                 >
//                     <div className="w-10 h-10 flex items-center justify-center">
//                         <div className="w-8 h-8 text-gray-600 group-hover:text-red-600 flex items-center justify-center transition-colors">
//                             {item.icon}
//                         </div>
//                     </div>
//                     {item.title && (
//                         <span className="text-md font-500 whitespace-nowrap leading-none group-hover:text-red-600 transition-colors">
//                             {item.title}
//                         </span>
//                     )}
//                 </Link>
//             ) : (
//                 <Link
//                     href={item.href}
//                     title={item.title}
//                     className="flex items-center justify-center h-full gap-1 transition-colors group hover:text-red-600"
//                 >
//                     <div className="w-10 h-10 flex items-center justify-center">
//                         <div className="w-8 h-8 text-gray-600 group-hover:text-red-600 flex items-center justify-center transition-colors">
//                             {item.icon}
//                         </div>
//                     </div>
//                     {item.title && (
//                         <span className="text-md font-500 whitespace-nowrap leading-none group-hover:text-red-600 transition-colors">
//                             {item.title}
//                         </span>
//                     )}
//                 </Link>
//             )}
//         </li>
//     );

//     // Profile item के लिए भी ठीक करें:
//     <li className="h-12 flex items-center justify-center px-3">
//         <Link
//             href={profileItem.href}
//             title="प्रोफाइल"
//             className="flex items-center justify-center h-full gap-1 transition-colors group hover:text-red-600"
//         >
//             <div className="w-10 h-10 flex items-center justify-center">
//                 <div className="w-8 h-8 text-gray-600 group-hover:text-red-600 flex items-center justify-center transition-colors">
//                     {profileItem.icon}
//                 </div>
//             </div>
//         </Link>
//     </li>

//     return (
//         <nav className="w-full mr-2">
//             <ul className="flex items-center">
//                 {section1Items.map((item, index) => (
//                     <MenuItem key={`section1-${index}`} item={item} />
//                 ))}

//                 <Divider />

//                 {section2Items.map((item, index) => (
//                     <MenuItem key={`section2-${index}`} item={item} />
//                 ))}

//                 <Divider />

//                 <li className="h-12 flex items-center justify-center px-3">
//                     {/* <Link
//                         href={profileItem.href}
//                         title="प्रोफाइल"
//                         className="flex items-center justify-center h-full gap-1 transition-colors"
//                     >
//                         <div className="w-10 h-10 flex items-center justify-center">
//                             <div className="w-8 h-8 hover:text-red-600 text-gray-600 flex items-center justify-center">
//                                 {profileItem.icon}
//                             </div>
//                         </div>
//                     </Link> */}
//                     <UserMenu />
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default NavigationMenu;


"use client";
import React from "react";
import Link from "next/link";
import UserMenu from "@/components/user-menu";

// Types
interface MenuItemType {
    title?: string;
    href: string;
    icon: React.ReactNode;
    external?: boolean;
    isDropdown?: boolean;
}

// Divider component
const Divider = () => <div className="h-6 w-px bg-gray-300 mx-2 self-center" />;

// Menu item component
const MenuItem = ({ item }: { item: MenuItemType }) => (
    <li className="h-12 flex items-center justify-center px-2">
        {item.external ? (
            <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="flex items-center justify-center h-full gap-1 group hover:text-red-600 transition-colors"
            >
                <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-8 h-8 text-gray-600 group-hover:text-red-600 flex items-center justify-center transition-colors">
                        {item.icon}
                    </div>
                </div>
                {item.title && (
                    <span className="text-md font-medium whitespace-nowrap leading-none group-hover:text-red-600 transition-colors">
                        {item.title}
                    </span>
                )}
            </Link>
        ) : (
            <Link
                href={item.href}
                title={item.title}
                className="flex items-center justify-center h-full gap-1 group hover:text-red-600 transition-colors"
            >
                <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-8 h-8 text-gray-600 group-hover:text-red-600 flex items-center justify-center transition-colors">
                        {item.icon}
                    </div>
                </div>
                {item.title && (
                    <span className="text-md font-medium whitespace-nowrap leading-none group-hover:text-red-600 transition-colors">
                        {item.title}
                    </span>
                )}
            </Link>
        )}
    </li>
);

const NavigationMenu = () => {
    // Section 1: Home, Video, Search
    const section1Items: MenuItemType[] = [
        {
            title: "होम",
            href: "/",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.084 20.999H14.7C14.203 20.999 13.8 20.596 13.8 20.099V16.237C13.8 15.834 13.47 15.504 13.067 15.504H10.92C10.522 15.504 10.2 15.826 10.2 16.224V20.083C10.2 20.587 9.788 20.999 9.284 20.999H3.9C3.405 20.999 3 20.594 3 20.099V11.48C3 11.126 3.148 10.789 3.409 10.55L11.398 3.234C11.739 2.922 12.261 2.922 12.602 3.234L20.591 10.55C20.852 10.789 21 11.126 21 11.48V20.084C21 20.587 20.588 20.999 20.084 20.999Z" />
                </svg>
            ),
        },
        
        {
            title: "वीडियो",
            href: "/videos",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12ZM2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM10.2 8.1L15.7 11.3C16.2 11.6 16.2 12.4 15.7 12.6L10.2 15.8C9.7 16.1 9 15.7 9 15.1V8.8C9 8.2 9.7 7.8 10.2 8.1Z" />
                </svg>
            ),
        },
        {
            title: "सर्च",
            href: "#",
            icon: (
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org2000/svg">
                    <path d="M12.0668 3.5C9.87467 3.5 7.6825 4.3365 6.0095 6.0095C2.6635 9.3555 2.6635 14.7793 6.0095 18.1253C7.6825 19.7983 9.87467 20.6348 12.0668 20.6348C13.8915 20.6348 15.7115 20.0468 17.2375 18.8883L22.5097 24.1605C22.7372 24.388 23.0358 24.5023 23.3345 24.5023C23.6332 24.5023 23.9318 24.388 24.1593 24.1605L24.1605 24.1593C24.6155 23.7043 24.6155 22.9658 24.1605 22.5108L18.8883 17.2387C21.4398 13.881 21.1913 9.0755 18.1265 6.01067C16.4523 4.3365 14.259 3.5 12.0668 3.5ZM12.0668 18.3003C10.402 18.3003 8.83633 17.6517 7.65917 16.4745C5.229 14.0443 5.229 10.0893 7.65917 7.65917C8.83633 6.482 10.402 5.83333 12.0668 5.83333C13.7317 5.83333 15.2973 6.482 16.4745 7.65917C18.9047 10.0893 18.9047 14.0443 16.4745 16.4745C15.2973 17.6517 13.7317 18.3003 12.0668 18.3003Z"
                        className="fill-current" />
                </svg>
            ),
        },
    ];

    // Section 2: Web Stories, E-paper
    const section2Items: MenuItemType[] = [
        {
            title: "वेब स्टोरीज",
            href: "/web-stories",
            icon: (
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_13121_47813)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.6668 2.33203H9.3335C8.71466 2.33203 8.12116 2.57786 7.68358 3.01545C7.246 3.45303 7.00016 4.04653 7.00016 4.66536V23.332C7.00016 23.9509 7.246 24.5444 7.68358 24.9819C8.12116 25.4195 8.71466 25.6654 9.3335 25.6654H18.6668C19.2857 25.6654 19.8792 25.4195 20.3167 24.9819C20.7543 24.5444 21.0002 23.9509 21.0002 23.332V4.66536C21.0002 4.04653 20.7543 3.45303 20.3167 3.01545C19.8792 2.57786 19.2857 2.33203 18.6668 2.33203ZM18.6668 23.332H9.3335V4.66536H18.6668V23.332ZM23.3335 4.66536V23.332C23.9523 23.332 24.5458 23.0862 24.9834 22.6486C25.421 22.211 25.6668 21.6175 25.6668 20.9987V6.9987C25.6668 6.37986 25.421 5.78637 24.9834 5.34878C24.5458 4.9112 23.9523 4.66536 23.3335 4.66536ZM4.66683 4.66536V23.332C4.04799 23.332 3.4545 23.0862 3.01691 22.6486C2.57933 22.211 2.3335 21.6175 2.3335 20.9987V6.9987C2.3335 6.37986 2.57933 5.78637 3.01691 5.34878C3.4545 4.9112 4.04799 4.66536 4.66683 4.66536Z"
                            className="fill-current" />
                    </g>
                    <defs>
                        <clipPath id="clip0_13121_47813">
                            <rect width="28" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            external: true,
        },
        {
            title: "ई-पेपर",
            href: "#",
            icon: (
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.107 24.493C23.1817 24.4977 23.2575 24.5 23.3334 24.5C25.263 24.5 26.8334 22.9308 26.8334 21V10.9608C26.8334 9.03117 25.263 7.46083 23.3334 7.46083H22.1259V7C22.1259 5.07033 20.5555 3.5 18.6259 3.5H4.66669C2.73702 3.5 1.16669 5.07033 1.16669 7V21C1.16669 22.9297 2.73702 24.5 4.66669 24.5H22.9764C23.0207 24.5 23.065 24.4977 23.107 24.493ZM22.1259 20.9592V9.793H23.3334C23.9774 9.793 24.5 10.3168 24.5 10.9597V21C24.5 21.644 23.9774 22.1667 23.3334 22.1667C22.6684 22.1667 22.1259 21.6242 22.1259 20.9592ZM3.50002 7C3.50002 6.356 4.02269 5.83333 4.66669 5.83333H18.6247C19.2687 5.83333 19.7914 6.35717 19.7914 7V20.9592C19.7914 21.3827 19.8672 21.7898 20.0037 22.1667H4.66669C4.02269 22.1667 3.50002 21.644 3.50002 21V7ZM6.42374 9.95512H16.8456C17.4826 9.95512 17.9971 9.43245 17.9971 8.78845C17.9971 8.14445 17.4826 7.62179 16.8456 7.62179H6.42374C5.78674 7.62179 5.27224 8.14445 5.27224 8.78845C5.27224 9.43245 5.78674 9.95512 6.42374 9.95512ZM16.8459 16.9668H14.6012C13.9642 16.9668 13.4497 16.4453 13.4497 15.8001C13.4497 15.155 13.9642 14.6335 14.6012 14.6335H16.8459C17.4829 14.6335 17.9974 15.155 17.9974 15.8001C17.9974 16.4453 17.4829 16.9668 16.8459 16.9668ZM14.6012 13.5531H16.8459C17.4829 13.5531 17.9974 13.0304 17.9974 12.3864C17.9974 11.7424 17.4829 11.2198 16.8459 11.2198H14.6012C13.9642 11.2198 13.4497 11.7424 13.4497 12.3864C13.4497 13.0304 13.9642 13.5531 14.6012 13.5531ZM16.8459 20.3782H14.6012C13.9642 20.3782 13.4497 19.8567 13.4497 19.2115C13.4497 18.5664 13.9642 18.0449 14.6012 18.0449H16.8459C17.4829 18.0449 17.9974 18.5664 17.9974 19.2115C17.9974 19.8567 17.4829 20.3782 16.8459 20.3782ZM6.42374 11.2198H10.9142C11.5512 11.2198 12.0657 11.7424 12.0657 12.3864V19.2103C12.0657 19.8554 11.5512 20.3769 10.9142 20.3769H6.42374C5.78674 20.3769 5.27224 19.8554 5.27224 19.2103V12.3864C5.27224 11.7424 5.78674 11.2198 6.42374 11.2198Z"
                        className="fill-current" />
                </svg>
            ),
            external: true,
        },
    ];

    return (
        <nav className="w-full">
            <ul className="flex items-center">
                {section1Items.map((item, i) => (
                    <MenuItem key={`section1-${i}`} item={item} />
                ))}
                <Divider />
                {section2Items.map((item, i) => (
                    <MenuItem key={`section2-${i}`} item={item} />
                ))}
                <Divider />
                <li className="h-12 flex items-center justify-center px-3">
                    <UserMenu />
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
