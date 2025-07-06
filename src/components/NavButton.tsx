import Button from "./Button";

interface props {
    label: string;
    link: string;
    scrolled: boolean;
    external?: boolean;
    width: "narrow" | "wide"
}

const btn = ({label, link, scrolled, external, width}: props) => {
    const onClick = () => {
        const location = external ? link : `#${link}`;
        window.location.replace(location);
    }
    return <Button 
        className="button" 
        style={
            width=="narrow"  
                ? {fontSize: "small"} 
                : scrolled ? {fontSize: "medium"} 
                : {}
            } 
        label={label} 
        onClick={onClick} 
    />;
};

export default btn;