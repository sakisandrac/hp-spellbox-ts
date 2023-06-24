import './RandomSpell.css';

interface RandomSpellProps {
  randomSpell: Spell
}

interface Spell {
  id: string,
  name: string,
  incantation: string | null,
  effect: string,
  canBeVerbal: boolean,
  type: string,
  light: string,
  creator: string | null
}

const RandomSpell = ({randomSpell}: RandomSpellProps) => {
  console.log(randomSpell)
  return (
      <div className="random-spell-flex">
        <div className="spell-info-container" >
          <p className="spell-name">{randomSpell?.name}</p>
          <p className="incantation-header">Incantation:</p>
          <p className="incantation">{randomSpell?.incantation ? randomSpell.incantation : "This spell is non verbal"}</p>
          <p className="incantation-header">Spell Effect:</p>
          <p className="incantation">{randomSpell?.effect}</p>
        </div>
      </div>
  )
}

export default RandomSpell