'use client';

import { useEffect } from "react"
import generateTeams from "@/lib/Algorithems/generateTeams"
import playerStorage from "@/lib/storage/playerStorage"
import teamStorage from "@/lib/storage/teamStorage";
import generateMatches from "@/lib/Algorithems/generateMatches";
import matchStorage from "@/lib/storage/matchStorage";

export default function Storage(){
    const players = [
        { "name": "Ahmed", "Age-Group": 3, "Rating": 3 },
        { "name": "Osama", "Age-Group": 2, "Rating": 3 },
        { "name": "Ali", "Age-Group": 1, "Rating": 5 },
        { "name": "Nawaf", "Age-Group": 3, "Rating": 3 },
        { "name": "Omar", "Age-Group": 2, "Rating": 1 },
        { "name": "Mazen", "Age-Group": 1, "Rating": 5 },
        { "name": "Saleh", "Age-Group": 3, "Rating": 3 },
        { "name": "Hadi", "Age-Group": 2, "Rating": 4 },
        { "name": "Yusuf", "Age-Group": 1, "Rating": 5 },
        { "name": "Baraa", "Age-Group": 3, "Rating": 3 },
        { "name": "Fares", "Age-Group": 2, "Rating": 4 },
        { "name": "Meshary", "Age-Group": 1, "Rating": 5 },
        { "name": "Moahmed", "Age-Group": 3, "Rating": 3 },
        { "name": "Moaz", "Age-Group": 2, "Rating": 1 },
        { "name": "Yasser", "Age-Group": 1, "Rating": 5 },
        { "name": "Mostafa", "Age-Group": 3, "Rating": 3 },
        { "name": "Sayed", "Age-Group": 2, "Rating": 4 },
        { "name": "Halem", "Age-Group": 1, "Rating": 5 },
        { "name": "Shogaa", "Age-Group": 3, "Rating": 3 },
        { "name": "Zyad", "Age-Group": 2, "Rating": 4 },
        { "name": "Zyad", "Age-Group": 2, "Rating": 4 },
        { "name": "Zyad", "Age-Group": 2, "Rating": 4 }
    ]

    const run = () =>{
        //const teamsByNumber = generateTeams.generateTeamsByNumber(5);
        // const teamsByNumber = generateTeams.generateTeamsByMaxPlayers(4);
        matchStorage.clearMatchList();
        matchStorage.clearMatches();
        console.log('run');
        generateMatches()
        
    }

    return <button onClick={run}>run</button>
}