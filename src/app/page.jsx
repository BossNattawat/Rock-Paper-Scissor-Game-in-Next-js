"use client"

import react, { useState, useEffect } from "react";

export default function Home() {

  const [humanChoice, setHumanChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")

  const [humanScore, setHumanScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const [result, setResult] = useState("")

  const choice = ["Rock", "Paper", "Scissors"]

  function randomComputerChoice() {
    
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];

    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    if(humanChoice == "Rock" && computerChoice == "Scissors"){
      setHumanScore(humanScore + 1);
      setResult("Human Win!")
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock"){
      setHumanScore(humanScore + 1);
      setResult("Human Win!")
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper"){
      setHumanScore(humanScore + 1);
      setResult("Human Win!")
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper"){
      setComputerScore(computerScore + 1);
      setResult("Computer Win!")
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors"){
      setComputerScore(computerScore + 1);
      setResult("Computer Win!")
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock"){
      setComputerScore(computerScore + 1);
      setResult("Computer Win!")
    }
  }, [computerChoice])

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen">
      <div className="flex flex-col justify-center items-center border-4 p-[48px] rounded-3xl bg-slate-900">

        <div className="mb-10 text-center">
          <h1 className="font-extrabold text-3xl">WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
        </div>

        <div className="flex lg:flex-row flex-col">
          <button className="btn btn-accent mx-4 text-2xl text-white lg:my-0 my-3" onClick={() => (setHumanChoice("Rock"), randomComputerChoice())}>Rock</button>
          <button className="btn btn-accent mx-4 text-2xl text-white lg:my-0 my-3" onClick={() => (setHumanChoice("Paper"), randomComputerChoice())}>Paper</button>
          <button className="btn btn-accent mx-4 text-2xl text-white lg:my-0 my-3" onClick={() => (setHumanChoice("Scissors"), randomComputerChoice())}>Scissors</button>
        </div>

        <div className="text-center my-9">

          <h1 className="text-3xl font-extrabold mb-9">{result}</h1>

          <h3 className="text-xl font-semibold">Your choice : {humanChoice}</h3>
          <h3 className="text-xl font-semibold">Computer's choice : {computerChoice}</h3>
        </div>

        <div className="text-center">
          <h2 className="text-2xl text-white font-bold">Your Score : {humanScore}</h2>
          <h2 className="text-2xl text-white font-bold">Computer Score : {computerScore}</h2>
        </div>

      </div>
    </div>
  );
}
