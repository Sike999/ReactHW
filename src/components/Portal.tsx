import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react';
import '../styles/Portal.css'

export default function Portal({ children, onClose }) {
    const portalRootRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {

        const portalRoot = document.createElement('div')
        portalRoot.className = "portalRoot"
        document.body.appendChild(portalRoot);
        portalRootRef.current = portalRoot;

        setIsMounted(true);

        const handleKey = (e) => {
            if(e.key == 'Escape') {
                onClose()
                console.log(portalRootRef.current)
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