import { formatPosition } from "../../utils/format";
import "./Player.scss";

function Player({ player, theme, updatePlayer }) {
  const { name, number, position, isCaptain, isActive } = player;

  const classNames = ["player", `player__${theme}`];

  if (!isActive) {
    classNames.push("player--inactive");
  }

  if (!!isCaptain) {
    classNames.push("player--captain");
  }

  return (
    <li className={classNames.join(" ")}>
      <div className="player__details">
        <span className="player__number">{number}</span>
        <span className="player__name">{name}</span>
        <span className="player__position">{formatPosition(position)}</span>
      </div>
      <div className="player__actions">
        <button
          className="player__button"
          onClick={() => {
            updatePlayer({ ...player, isActive });
          }}
        >
          {isActive ? "Deactivate" : "Activate"}
        </button>
        {isActive && (
          <button
            className="player__button"
            onClick={() => {
              updatePlayer({ ...player, isCaptain: !isCaptain });
            }}
          >
            {isCaptain ? "Remove captain" : "Appoint captain"}
          </button>
        )}
      </div>
    </li>
  );
}

export default Player;
