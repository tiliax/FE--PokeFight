import React, { useEffect, useState } from "react";

export default function GameDetails(){
    const [gameDetails, setGameDetails] = useState([]);
    const [spinner, setSpinner] = useState();

    const fetchGameDetails = () =>{
        const gameDetails = fetch(`https://blooming-bayou-85292.herokuapp.com/game/leaderboard`)
        .then((response) => response.json())
        return gameDetails
    }
    console.log(gameDetails)

    useEffect(async() => {
        setSpinner(false)
       const fightDetails = await fetchGameDetails();
       setGameDetails(fightDetails)
       setSpinner(true);
    }, [])

    return(
        <div>
            {spinner ? 
            <table>
            <thead>
                <tr>
                    <td>
                    <h1>Fight results</h1>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Winner</th>
                    <th>Loser</th>
                    <th>Date</th>
                </tr>
                {gameDetails.map((item, i) => (
                    <tr key={i}>
                    <td>{item.winnerName}</td>
                    <td>{item.enemyName}</td>
                    <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        :
        null
        }
        </div>
    )
}