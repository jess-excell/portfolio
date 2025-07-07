import Button from "./Button";

interface props {
    label: string;
    link: string;
    external?: boolean;
}

const btn = ({label, link, external}: props) => {
    const onClick = () => {
        external 
        ? window.location.href = link  
        : window.location.replace(`#${link}`);
    }
    return <Button 
        className="button"
        label={label} 
        onClick={onClick} 
    />;
};

export default btn;