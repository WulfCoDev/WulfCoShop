import { useNavigate } from "react-router-dom";

const LogoButton = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    }
    return (
        <button onClick={handleLogoClick}>WulfCo Shop</button>
    );
};

export default LogoButton;