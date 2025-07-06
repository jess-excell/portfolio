import React from "react";

interface props {
    children: React.JSX.Element;
    style?: React.CSSProperties;
    onClick?: () => void
};

const Card = ({children, style, onClick}: props) => {
    return <button className="card" style={style} onClick={onClick}>
        {children}
    </button>
};

export default Card;