import React, { useRef, useEffect } from 'react';

function StickySidebar() {
    const sideRef = useRef(null);

    useEffect(() => {
        const checkPosition = () => {
            if (!sideRef.current) return;

            const rect = sideRef.current.getBoundingClientRect();
            if (rect.top <= 0) {
                sideRef.current.style.transform = `translateY(${-rect.top}px)`;
                sideRef.current.style.position = 'fixed'; // Using fixed instead of sticky
            } else {
                sideRef.current.style.transform = 'translateY(0)';
                sideRef.current.style.position = 'relative';
            }
        };

        window.addEventListener('scroll', checkPosition);
        checkPosition();

        return () => window.removeEventListener('scroll', checkPosition);
    }, []);

    return (
        <div className="container">
            <div ref={sideRef} className="side">
                {/* Content of .side */}
            </div>
        </div>
    );
}

export default StickySidebar;
