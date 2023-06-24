import React from 'react'

interface MySpellsProps {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<{
    name: string;
    house: string;
    savedSpells: Spell[];
    clicks: number;
  }>>
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

interface User {
  name: string;
  house: string;
  savedSpells: Spell[];
  clicks: number;
}

export const MySpells = ({user, setUser}: MySpellsProps) => {

  const deleteSpell = (id: string) => {
    const filteredSpells = user.savedSpells.filter(spell => spell.id != id);
    setUser(prev => {
      return {
        ...prev,
        savedSpells: filteredSpells
      }
    })
  }

  return (
    <div className={`spell-page-container${user.house ? "-" + user.house : ""}`}>
      <h1 className='all-spells-title'>My Saved Spells</h1>
      <div className='all-spells-container'>
      {user.savedSpells.length > 0 ? user.savedSpells.map(spell => (
      <div key={spell.id} className="spell-container">
        <p className="spell-name">{spell.name}</p>
        <p className="incantation-header">Incantation:</p>
        <p className="incantation">{spell.incantation ? spell.incantation : "This spell is non verbal"}</p>
        <p className="incantation-header">Spell Effect:</p>
        <p className="incantation">{spell.effect}</p>
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={() => {deleteSpell(spell.id)}} >Delete</button>
      </div>
      )) : "No Saved Spells Yet!"}
      </div>
    </div>
  )
}
