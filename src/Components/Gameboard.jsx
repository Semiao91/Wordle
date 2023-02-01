import React, { useState, useEffect } from "react";
import { word } from "../dictionary";


// THINGS TO IMPLEMENT
// ..........
// 2 - add CSS animations to letter inputs and word checks
// 3 - add side bar with the letters that have been used 


export default function Gameboard() {
    
    const [letter, setLetter] = useState([]);
    const [isVisible, setVisibility] = useState(false);
    const [message, setMessage] = useState("");
    let row = 0;
    let collum = 0;
    let gameOverCounter = 0;
    let capacity = [];
    const newWord = word[Math.floor(Math.random() * word.length)] 

    const closeOverlay = () => {
    setVisibility(false);
    };

    window.addEventListener("load", () => {
        console.log(newWord);
    });

    useEffect(() => {
        document.addEventListener("keypress", handleNewLetter)
        document.addEventListener("keydown", deleteLetter)

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleNewLetter = (event) => {


        if (row < 5 && event.key !== "Enter") {

            row++
            setLetter(letter => [...letter, event.key]);
            capacity.push(event.key);      
            

        }
        else if (event.key === "Enter" && row === 5 & !word.includes(capacity.join(''))) {
            // REPLACE ALERTS WITH POPUPS         
            setVisibility(true)
            setMessage("This word doesnt exist")
        }
        else if (event.key === "Enter" && row === 5) {
            
            row = 0;
            gameOverCounter ++;
            capacity.length = 5
            console.log(capacity + " array") 
            

            if (newWord === capacity.join('')){
                // REPLACE ALERTS WITH POPUPS
                setVisibility(true)
                setMessage("You won! Congratulations!")
            }

            else if (gameOverCounter === 6) {
                // REPLACE ALERTS WITH POPUPS
                setVisibility("true")
                setMessage("You lost :( Game Over!")
            }

            for(let i = 0; i <  capacity.length; i++) {
                
                
                if (newWord[i] === capacity[i]){
                    document.getElementById(collum).classList.add("correct")
                    collum ++    
                    
                }
                else if(newWord.includes(capacity[i]) ){
                    document.getElementById(collum).classList.add("close")
                    collum ++
                }
               else {
                    document.getElementById(collum).classList.add("wrong")
                    collum ++
               }
                
            }   
            
            capacity = []
        }
    }

    const deleteLetter = (event) => {

        if (event.key === 'Backspace' && row !== 0) {
            row--
            setLetter((letter) => (letter.slice(0, -1)));
            capacity.pop(event.key);
            
        }
    }

    return (

      
    <div className="board" onClick={closeOverlay}>
        <div>
        {isVisible && (
          <div id="overlay">
            <div id="text">{message}</div>
            <button className="cross" onClick={closeOverlay}></button>
          </div>
        )}
        
      </div>
    
            <div className="row" >
                <div className="letter" id="0">{letter[0]}</div>
                <div className="letter" id="1">{letter[1]}</div>
                <div className="letter" id="2">{letter[2]}</div>
                <div className="letter" id="3">{letter[3]}</div>
                <div className="letter" id="4">{letter[4]}</div>
            </div>
            <div className="row">
                <div className="letter" id="5">{letter[5]}</div>
                <div className="letter" id="6">{letter[6]}</div>
                <div className="letter" id="7">{letter[7]}</div>
                <div className="letter" id="8">{letter[8]}</div>
                <div className="letter" id="9">{letter[9]}</div>
            </div>
            <div className="row">
                <div className="letter" id="10">{letter[10]}</div>
                <div className="letter" id="11">{letter[11]}</div>
                <div className="letter" id="12">{letter[12]}</div>
                <div className="letter" id="13">{letter[13]}</div>
                <div className="letter" id="14">{letter[14]}</div>
            </div>
            <div className="row">
                <div className="letter" id="15">{letter[15]}</div>
                <div className="letter" id="16">{letter[16]}</div>
                <div className="letter" id="17">{letter[17]}</div>
                <div className="letter" id="18">{letter[18]}</div>
                <div className="letter" id="19">{letter[19]}</div>
            </div>
            <div className="row">
                <div className="letter" id="20">{letter[20]}</div>
                <div className="letter" id="21">{letter[21]}</div>
                <div className="letter" id="22">{letter[22]}</div>
                <div className="letter" id="23">{letter[23]}</div>
                <div className="letter" id="24">{letter[24]}</div>
            </div>
            <div className="row">
                <div className="letter" id="25">{letter[25]}</div>
                <div className="letter" id="26">{letter[26]}</div>
                <div className="letter" id="27">{letter[27]}</div>
                <div className="letter" id="28">{letter[28]}</div>
                <div className="letter" id="29">{letter[29]}</div>
            </div>
        </div>

    )
    
}