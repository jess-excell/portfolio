import { useModalContext } from "../../contexts/modalContext";
import Button from "../Button";

const baseModal = () => {
    const { state, dispatch } = useModalContext();

    return (
        <div style={{display: state.visible ? "block" : "none"}} className="modal">
            <div className="content">
                {state.content}
                <Button className="button close" onClick={() => dispatch({ type: "hide" })} label="Close"/>
            </div>
        </div>
    );
};

export default baseModal;