import "./GameOver.css"
function GameOver(props){
  const { open, close, gameStats } = props;
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <p>Game Over</p>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <ul className="GameStas">
              <li>최종 레벨</li>
              <li className="value">{level}</li>
              <li>최종 점수</li>
              <li className="value">{points}</li>
            </ul>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default GameOver;