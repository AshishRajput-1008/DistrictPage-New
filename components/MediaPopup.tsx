// // components/MediaPopup.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';

// interface MediaPopupProps {
//     isOpen: boolean;
//     onClose: () => void;
//     mediaUrl: string;
//     mediaType: 'image' | 'video';
//     title?: string;
// }

// export default function MediaPopup({ isOpen, onClose, mediaUrl, mediaType, title }: MediaPopupProps) {
//     const [isLoading, setIsLoading] = useState(true);
//     const fullMediaUrl = mediaUrl?.startsWith('http')
//         ? mediaUrl
//         : `${process.env.NEXT_PUBLIC_API_BASE_URL}${mediaUrl}`;
//     console.log('MediaPopup - isOpen:', isOpen);
//     console.log('MediaPopup - mediaUrl:', mediaUrl);
//     console.log('MediaPopup - mediaType:', mediaType);
//     useEffect(() => {
//         if (isOpen) {
//             setIsLoading(true);
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }

//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isOpen]);

//     const handleClose = () => {
//         onClose();
//     };

//     const handleBackdropClick = (e: React.MouseEvent) => {
//         if (e.target === e.currentTarget) {
//             handleClose();
//         }
//     };

//     useEffect(() => {
//         const handleEscape = (e: KeyboardEvent) => {
//             if (e.key === 'Escape') {
//                 handleClose();
//             }
//         };

//         if (isOpen) {
//             window.addEventListener('keydown', handleEscape);
//         }

//         return () => {
//             window.removeEventListener('keydown', handleEscape);
//         };
//     }, [isOpen]);

//     if (!isOpen) return null;

//     return (
//         <div
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all"
//             onClick={handleBackdropClick}
//         >
//             {/* Close button */}
//             <button
//                 onClick={handleClose}
//                 className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-2 text-white transition-all hover:bg-white/30 hover:scale-110"
//                 aria-label="Close"
//             >
//                 <X className="h-6 w-6" />
//             </button>

//             {/* Media container */}
//             <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
//                 <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
//                     {mediaType === 'image' ? (
//                         <div className="relative w-full h-full flex items-center justify-center">
//                             <Image
//                                 src={fullMediaUrl}
//                                 alt={title || 'Media'}
//                                 fill
//                                 className="object-contain"
//                                 unoptimized
//                                 onLoadingComplete={() => setIsLoading(false)}
//                             />
//                             {isLoading && (
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                     <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <div className="relative w-full h-full flex items-center justify-center">
//                             <video
//                                 src={fullMediaUrl}
//                                 controls
//                                 autoPlay
//                                 className="max-h-full max-w-full rounded-lg shadow-2xl"
//                                 onLoadedData={() => setIsLoading(false)}
//                             >
//                                 <track kind="captions" />
//                                 Your browser does not support the video tag.
//                             </video>
//                             {isLoading && (
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                     <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Title bar for mobile */}
//             {title && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white md:hidden">
//                     <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
//                 </div>
//             )}
//         </div>
//     );
// }


// components/MediaPopup.tsx
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface MediaPopupProps {
    isOpen: boolean;
    onClose: () => void;
    mediaUrl: string;
    mediaType: 'image' | 'video';
    title?: string;
}

export default function MediaPopup({ isOpen, onClose, mediaUrl, mediaType, title }: MediaPopupProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    if (!isOpen) return null;


    return (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all"
            onClick={handleBackdropClick}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            {/* Close button */}
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/30 hover:scale-110"
                aria-label="Close"
            >
                <X className="h-6 w-6" />
            </button>

            {/* Media container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
                <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                    {mediaType === 'image' ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={mediaUrl}
                                alt={title || 'Media'}
                                fill
                                className="object-contain"
                                unoptimized
                                onLoadingComplete={() => {
                                    setIsLoading(false);
                                }}
                                onError={(e) => {
                                    console.error('Image failed to load:', mediaUrl);
                                    setIsLoading(false);
                                }}
                            />
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <video
                                src={mediaUrl}
                                controls
                                autoPlay
                                className="max-h-full max-w-full rounded-lg shadow-2xl"
                                onLoadedData={() => {
                                    setIsLoading(false);
                                }}
                                onError={(e) => {
                                    console.error('Video failed to load:', mediaUrl);
                                    setIsLoading(false);
                                }}
                            >
                                <track kind="captions" />
                                Your browser does not support the video tag.
                            </video>
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Title bar for mobile */}
            {title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white md:hidden">
                    <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
                </div>
            )}
        </div>
    );
}