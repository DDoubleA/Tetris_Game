import "./Menu.css"
import { useNavigate } from "react-router-dom";

function Menu ({onClick}){
    const navigate = useNavigate();

    return (


    <div className="Menu">
        <div>
            <button className = "Button" onClick = {() => navigate("/tetris")}>
            1인용 테트리스
            </button>
        </div>
        <div>
            <button className = "Button" onClick = {onClick}>
                2인용 테트리스
            </button>
        </div>
    </div>   
    )
}

export default Menu;