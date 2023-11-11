import React, { useRef, useEffect } from 'react';

function StickySidebar() {
    const sideRef = useRef(null);

    useEffect(() => {
        const checkPosition = () => {
            if (!sideRef.current) return;

            const rect = sideRef.current.getBoundingClientRect();
            if (rect.top <= 0) {
                sideRef.current.style.position = 'sticky';
            } else {
                sideRef.current.style.position = 'relative';
                sideRef.current.style.top = `${rect.top}px`;
            }
        };

        window.addEventListener('scroll', checkPosition);
        checkPosition();


        return () => window.removeEventListener('scroll', checkPosition);
    }, []);

    return (
        <div className="container">
            <div ref={sideRef} className="side">
            </div>
        </div>
    );
}

export default StickySidebar
