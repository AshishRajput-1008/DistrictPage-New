import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function safeNavigate(
    router: AppRouterInstance,
    targetPath: string,
    onSamePageMobile?: () => void
) {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;
    const isDesktop = window.innerWidth >= 1024;

    if (currentPath === targetPath) {
        if (isDesktop) {
            window.location.reload();
        } else {
            onSamePageMobile?.();
        }
        return;
    }

    router.push(targetPath);
}
