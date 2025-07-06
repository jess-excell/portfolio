import type React from "react";

interface props {
    onClick: () => void;
    label: string;
    style?: React.CSSProperties;
    className?: string;
};

const btn = ({onClick, label, style, className}: props): React.JSX.Element => (
    <button 
        onClick={onClick} 
        style={{...style}} 
        className={className}
    >
        {label}
    </button>
);

export default btn