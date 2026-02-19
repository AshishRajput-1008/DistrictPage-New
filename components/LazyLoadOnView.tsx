// // components/LazyLoadOnView.tsx
// "use client";
// import { useState, useEffect } from "react";

// interface LazyLoadOnViewProps {
//   children: React.ReactNode;
// }

// export default function LazyLoadOnView({ children }: LazyLoadOnViewProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [ref, setRef] = useState<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!ref) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     observer.observe(ref);
//     return () => observer.disconnect();
//   }, [ref]);

//   return <div ref={setRef}>{isVisible ? children : null}</div>;
// }


// // components/LazyLoadOnView.tsx
// "use client";
// import { useState, useEffect } from "react";

// interface LazyLoadOnViewProps {
//     children: React.ReactNode;
//     height?: string;
// }

// export default function LazyLoadOnView({ children, height = "" }: LazyLoadOnViewProps) {
//     const [isVisible, setIsVisible] = useState(false);
//     const [ref, setRef] = useState<HTMLDivElement | null>(null);

//     useEffect(() => {
//         if (!ref) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { rootMargin: "200px" }
//         );
//         observer.observe(ref);
//         return () => observer.disconnect();
//     }, [ref]);

//     return (
//         <div ref={setRef} className={height}>
//             {isVisible ? children : <div className={`${height} w-full bg-gray-100 animate-pulse rounded-lg`}></div>}
//         </div>
//     );
// }



// "use client";
// import { useState, useEffect } from "react";

// interface LazyLoadOnViewProps {
//     children: React.ReactNode;
//     height?: string; // optional height, agar chahiye toh
// }

// export default function LazyLoadOnView({ children, height = "" }: LazyLoadOnViewProps) {
//     const [isVisible, setIsVisible] = useState(false);
//     const [ref, setRef] = useState<HTMLDivElement | null>(null);

//     useEffect(() => {
//         if (!ref) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { rootMargin: "200px" }
//         );
//         observer.observe(ref);
//         return () => observer.disconnect();
//     }, [ref]);

//     return (
//         <div ref={setRef} className={height}>
//             { children}
//         </div>
//     );
// }




"use client";
import { useState, useEffect } from "react";

interface LazyLoadOnViewProps {
    children: React.ReactNode;
    height?: string; // optional height to prevent layout shift
    rootMargin?: string; // intersection observer rootMargin
    className?: string; // optional extra classes
}

export default function LazyLoadOnView({
    children,
    height = "",
    rootMargin = "0px",
    className = ""
}: LazyLoadOnViewProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return (
        <div
            ref={setRef}
            className={`${height} transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
        >
            {isVisible && children}
        </div>
    );
}
