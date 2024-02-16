import { useCallback } from 'react';

export const useTrackingEvent = () => {
    const trackEvent = useCallback((eventName, eventBody) => {
        window.intempt.recordEvent(eventName, eventBody);
    }, []);

    return trackEvent;
};