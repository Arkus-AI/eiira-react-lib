import * as React from "react";
const generateId = () => {
    return Math.random().toString(36).substring(2, 15)
}

const useHtmlId = () => {
    const idRef = React.useRef(null);
    React.useEffect(() => {
        idRef.current = generateId();
    }, []);

    return idRef.current;
}

export { useHtmlId };