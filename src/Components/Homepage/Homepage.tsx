import React, { useEffect, useState } from 'react';
import './Homepage.css';
import RandomSpell from '../RandomSpell/RandomSpell';
import scroll from './scroll.png';

interface HomepageProps {
  randomSpell: Spell,
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

const Homepage = ({randomSpell, user, setUser}: HomepageProps) => {

//FUNCTIONS
  const selectHouse = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setUser(prev => {
      return {...prev, [name]: value}
    });
  }

  const saveSpell = (user: User) => {
    const saved = user.savedSpells.some(spell => {
      return spell.id === randomSpell.id
    })

    if (!saved) {
      setUser(prev => {
        return {
          ...prev,
          savedSpells: [...prev.savedSpells, randomSpell]
        }
      })
    }
  }

  const getRandomSpell = () => {
    setUser(prev => {
      return {...prev, clicks: prev.clicks + 1}
    })
  }

  return (
    <div className={`main-page-container${user.house ? "-" + user.house : ""}`}>
      <div className={`main-container ${user.house ? user.house : ""}`}>
        <main className="homepage-container" style={user.house? {color:"white"}: {color:"black"}}>
          <h1>{`Hello ${user.name}`}</h1>
          <label className="house-label" htmlFor="house">Choose Your House:</label>
          <select
            className="house-selector"
            id="house"
            value={user.house}
            onChange={(e) => {selectHouse(e)}}
            name="house">
            <option value="">---</option>
            <option value="gryffindor">Gryffindor</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="slytherin">Slytherin</option>
          </select>
        </main>
      </div>
      <div className="random-spell-container">
        <img className="scroll-img" src={scroll} />
        <RandomSpell randomSpell={randomSpell} />
      </div>
      <div className="btn-container">
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={() => {saveSpell(user)}}>Save Spell</button>
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={getRandomSpell}>Get Random Spell</button>
      </div>
    </div>
  )
}

export default Homepage