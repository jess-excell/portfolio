import React from "react";
import { headingHeight } from "../constants/headingHeight";

const useHeader = () => {
    const [ scrolled, setScrolled ] = React.useState<boolean>(false);
    const [ width, setWidth ] = React.useState<"wide" | "narrow">(window.outerWidth > 800 ? "wide" : "narrow");
    
    React.useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.outerWidth > 800 ? "wide" : "narrow";
            setWidth(width);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    React.useEffect(() => {
        document.documentElement.style.scrollPaddingTop = scrolled ? headingHeight.scrolled : headingHeight.base;
    }, [scrolled]);

    return { scrolled, width }
}

export default useHeader;