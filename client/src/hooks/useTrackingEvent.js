import { useCallback } from 'react';

export const useTrackingEvent = () => {
    const trackEvent = useCallback((eventName, eventBody) => {
        window.intempt.record({
            eventTitle: eventName,
            data: eventBody
        });
    }, []);

    return trackEvent;
};
