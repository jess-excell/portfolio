import React from "react";

const useHeader = () => {
    const [ scrolled, setScrolled ] = React.useState<boolean>(false);
    const [ width, setWidth ] = React.useState<"wide" | "narrow">(window.outerWidth > 800 ? "wide" : "narrow");
    const [ height, setHeight ] = React.useState<number>();
    
    // Hook to update scroll status when user scrolls on the page
    React.useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };

        // Add event listener for when the user scrolls down the page
        window.addEventListener('scroll', handleScroll); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hook to watch the height of the header. When header size changes, later useEffect is triggered.
    React.useEffect(() => {
        const header = document.getElementById("header");
        if (!header) return;

        // Set observer to watch height of header
        const obs = new ResizeObserver(() => {
            setHeight(header.offsetHeight);
        });
        obs.observe(header);
        return () => obs.disconnect();
    }, [])

    // Hook to set width of page (different header for narrow screens)
    React.useEffect(() => {
        const handleResize = () => {
            const width = window.outerWidth > 800 ? "wide" : "narrow";
            setWidth(width);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    // Hook to set scrollPaddingTop to the height of the header
    React.useEffect(() => {
        document.documentElement.style.scrollPaddingTop = `${height}px`;
    }, [height]);

    return { scrolled, width, height }
}

export default useHeader;