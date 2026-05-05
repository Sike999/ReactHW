import { createPortal } from 'react-dom'
import { ReactNode, useEffect, useRef, useState } from 'react';
// @ts-expect-error - CSS import
import '../styles/Portal.css'

export default function Portal({ children, onClose } : {children: ReactNode}) {
    const portalRootRef = useRef<HTMLDivElement | null>(null);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {

        const portalRoot = document.createElement('div')
        portalRoot.className = "portalRoot"
        document.body.appendChild(portalRoot);
        portalRootRef.current = portalRoot;

        setIsMounted(true);

        const handleKey = (e) => {
            if(e.key == 'Escape') {
                onClose()
            }
        }
    document.addEventListener('keydown', handleKey);

    return () => {
        document.removeEventListener('keydown',handleKey)
        if (portalRootRef.current && portalRootRef.current.parentNode) {
            portalRootRef.current.parentNode.removeChild(portalRootRef.current);
        }
        portalRootRef.current = null;
    }
    },[onClose])
    if (!portalRootRef.current && !isMounted) {
        return null;
    }
    return createPortal(
        <>
            {children}
        </>,
        portalRootRef.current
    );
}