import "./GameController.css"
import {playerController} from "../business/PlayerController"
import { actionForKey, Action, actionIsDrop } from "../business/Input";
import {useInterval} from "../hooks/useInterval"
import {useDropTime} from "../hooks/useDropTime"

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
  }) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    })

    useInterval(() => {
        handleInput({action : Action.SlowDrop});
    }, dropTime)

    const onKeyUp = ({code}) => {
        // if(code === "Key")
        // console.log(`onKeyup ${code}`);
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime();
    }

    const onKeyDown = ({code}) => {
        // console.log(`onKeyDown ${code}`);
        const action = actionForKey(code);
        if(action === Action.Pause){
            if(dropTime){
                pauseDropTime();
            }else{
                resumeDropTime();
            }
        }else{
            // if(actionIsDrop(action)) pauseDropTime();
            // if (!dropTime) {
            //     return;
            //   }
            handleInput({action});
        }
        
    }
    const handleInput = ({action}) => {
        // console.log(`onKeyup ${action}`);
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    }

    return <input 
                className = "GameController" 
                type ="text" 
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                autoFocus
            />;
};

export default GameController;