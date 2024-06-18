import Player from "../Player/Player";
import "./PlayerList.scss";

function PlayerList({ players, status, theme, updatePlayer }) {
  return (
    <section className="player-section">
      <h3 className="player-section__title">{status} players</h3>
      {!players.length ? (
        <h4>No {status} players</h4>
      ) : (
        <ul className="player-list">
          {players
            .sort((a, b) => a.number - b.number)
            .map((player) => (
              <Player
                key={player.id}
                player={player}
                theme={theme}
                updatePlayer={updatePlayer}
              />
            ))}
        </ul>
      )}
    </section>
  );
}

export default PlayerList;
