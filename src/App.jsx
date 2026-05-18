// import { useEffect, useState } from "react";

// export default function App() {
//   const [bugs, setBugs] = useState([]);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(60);
//   const [running, setRunning] = useState(false);
//   const [highScore, setHighScore] = useState(
//   Number(localStorage.getItem("highScore")) || 0
// );



//   // START GAME
//   const startGame = () => {
//     setScore(0);
//     setTime(60);
//     setBugs([]);
//     setRunning(true);
//   };

//   // BUG SPAWN SYSTEM
//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       const bug = {
//         id: Date.now() + Math.random(),
//         x: Math.random() * 90,
//         y: Math.random() * 90,
//       };

//       setBugs((prev) => [...prev, bug]);

//       setTimeout(() => {
//         setBugs((prev) => prev.filter((b) => b.id !== bug.id));
//       }, 2000);
//     }, 600);

//     return () => clearInterval(interval);
//   }, [running]);

//   // TIMER SYSTEM
//   useEffect(() => {
//     if (!running) return;

//     const timer = setInterval(() => {
//       setTime((t) => {
//         if (t <= 1) {
//           setRunning(false);
//           setBugs([]);
//           return 0;
//         }
//         return t - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [running]);


//   useEffect(() => {
//   if (score > highScore) {
//     setHighScore(score);
//     localStorage.setItem("highScore", score);
//   }
// }, [score, highScore]);
//   // KILL BUG
//   const killBug = (id) => {
//     setScore((s) => s + 1);
//     setBugs((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col items-center p-4">

//       {/* SEO HEADER */}
//       <div className="text-center max-w-2xl mb-4">
//         <h1 className="text-3xl font-bold text-green-400">
//           🐞 Bug Killer Game Online
//         </h1>
//         <p className="text-gray-400 mt-2">
//           Play this free reaction game. Click bugs as fast as possible and
//           improve your speed.
//         </p>
//       </div>

//       {/* SCORE BOARD */}
//     <div className="flex flex-wrap justify-center gap-6 mb-3 text-lg">
//   <p>
//     🎯 Score:
//     <span className="text-yellow-400 ml-1">{score}</span>
//   </p>

//   <p>
//     🏆 High Score:
//     <span className="text-green-400 ml-1">{highScore}</span>
//   </p>

//   <p>
//     ⏳ Time:
//     <span className="text-red-400 ml-1">{time}</span>
//   </p>
// </div>

//       {/* START BUTTON */}
//       {!running && (
//         <button
//           onClick={startGame}
//           className="px-6 py-2 bg-green-500 rounded hover:bg-green-600"
//         >
//           Start Game
//         </button>
//       )}

//       {/* GAME AREA */}
//       {/* <div className="relative mt-4 w-full max-w-3xl h-[500px] bg-gray-800 rounded overflow-hidden">

//         {bugs.map((bug) => (
//           <div
//             key={bug.id}
//             onClick={() => killBug(bug.id)}
//             className="absolute text-2xl cursor-pointer"
//             style={{
//               left: `${bug.x}%`,
//               top: `${bug.y}%`,
//             }}
//           >
//             🐞
//           </div>
//         ))} */}


        


//         {/* GAME OVER SCREEN */}
//         {/* {!running && time === 0 && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
//             <h2 className="text-2xl text-red-400">Game Over</h2>
//             <p className="mt-2">Final Score: {score}</p>

//             <button
//               onClick={startGame}
//               className="mt-4 px-4 py-2 bg-blue-500 rounded"
//             >
//               Play Again
//             </button>
//           </div>
//         )}
//       </div> */}


//       <div className="relative mt-4 w-full max-w-3xl h-[500px] bg-gray-800 rounded overflow-hidden flex items-center justify-center">

//   {/* BEFORE GAME START SCREEN */}
//   {!running && time === 60 && (
//     <div className="text-center text-gray-300">
      
//       <div className="text-6xl animate-bounce">🐞</div>

//       <h2 className="text-xl mt-4 text-white">
//         Ready to Hunt Bugs?
//       </h2>

//       <p className="text-sm mt-2 text-gray-400">
//         Click “Start Game” and kill as many bugs as you can in 60 seconds
//       </p>
//     </div>
//   )}

//   {/* BUGS */}
//   {bugs.map((bug) => (
//     <div
//       key={bug.id}
//       onClick={() => killBug(bug.id)}
//       className="absolute text-2xl cursor-pointer"
//       style={{
//         left: `${bug.x}%`,
//         top: `${bug.y}%`,
//       }}
//     >
//       🐞
//     </div>
//   ))}

//   {/* GAME OVER SCREEN */}
//   {!running && time === 0 && (
//     <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
//       <h2 className="text-2xl text-red-400">Game Over</h2>
//       <p className="mt-2">Final Score: {score}</p>

//       <button
//         onClick={startGame}
//         className="mt-4 px-4 py-2 bg-blue-500 rounded"
//       >
//         Play Again
//       </button>
//     </div>
//   )}

// </div>

//       {/* SEO FOOTER */}
//       <div className="max-w-2xl text-gray-400 text-sm mt-6">
//         <h2 className="text-white mb-2">About This Game</h2>
//         <p>
//           Bug Killer Game is a free online browser game where players improve
//           reaction speed by clicking bugs quickly. No download required.
//         </p>
//       </div>

//     </div>
//   );
// }





// import { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [bugs, setBugs] = useState([]);
//   const [score, setScore] = useState(0);
//   const [time, setTime] = useState(60);
//   const [running, setRunning] = useState(false);

//   const [highScore, setHighScore] = useState(
//     Number(localStorage.getItem("highScore")) || 0
//   );

//   // SOUND
//   const hitSound = useRef(null);

//   // PRELOAD SOUND
//   useEffect(() => {
//     hitSound.current = new Audio("/hit.mp3");
//     hitSound.current.preload = "auto";
//   }, []);

//   // START GAME
//   const startGame = () => {
//     setScore(0);
//     setTime(60);
//     setBugs([]);
//     setRunning(true);
//   };

//   // BUG SPAWN SYSTEM
//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       const bug = {
//         id: Date.now() + Math.random(),
//         x: Math.random() * 85,
//         y: Math.random() * 80,
//       };

//       setBugs((prev) => [...prev, bug]);

//       // REMOVE BUG AFTER 2 SECONDS
//       setTimeout(() => {
//         setBugs((prev) => prev.filter((b) => b.id !== bug.id));
//       }, 2000);

//     }, 600);

//     return () => clearInterval(interval);
//   }, [running]);

//   // TIMER SYSTEM
//   useEffect(() => {
//     if (!running) return;

//     const timer = setInterval(() => {
//       setTime((t) => {
//         if (t <= 1) {
//           setRunning(false);
//           setBugs([]);
//           return 0;
//         }

//         return t - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [running]);

//   // SAVE HIGH SCORE
//   useEffect(() => {
//     if (score > highScore) {
//       setHighScore(score);
//       localStorage.setItem("highScore", score);
//     }
//   }, [score, highScore]);

//   // KILL BUG
//   const killBug = (id) => {

//     // PLAY SOUND
//     if (hitSound.current) {
//       hitSound.current.currentTime = 0;

//       hitSound.current.play().catch(() => {});
//     }

//     setScore((s) => s + 1);

//     setBugs((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col items-center p-4">

//       {/* SEO HEADER */}
//       <div className="text-center max-w-2xl mb-4">

//         <h1 className="text-3xl font-bold text-green-400">
//           🐞 Bug Killer Game Online
//         </h1>

//         <p className="text-gray-400 mt-2">
//           Play this free insect reaction game online. Click bugs quickly,
//           improve your reaction speed, and beat your high score.
//         </p>

//       </div>

//       {/* SCORE BOARD */}
//       <div className="flex flex-wrap justify-center gap-6 mb-3 text-lg">

//         <p>
//           🎯 Score:
//           <span className="text-yellow-400 ml-1">{score}</span>
//         </p>

//         <p>
//           🏆 High Score:
//           <span className="text-green-400 ml-1">{highScore}</span>
//         </p>

//         <p>
//           ⏳ Time:
//           <span className="text-red-400 ml-1">{time}</span>
//         </p>

//       </div>

//       {/* START BUTTON */}
//       {!running && (
//         <button
//           onClick={startGame}
//           className="px-6 py-2 bg-green-500 rounded hover:bg-green-600"
//         >
//           Start Game
//         </button>
//       )}

//       {/* GAME AREA */}
//       <div
//   className="relative mt-4 w-full max-w-3xl h-[500px] rounded overflow-hidden flex items-center justify-center bg-center bg-cover border-4 border-green-900"
//   style={{
//     backgroundImage: "url('/gamearea.jpg')",
//   }}
// >

//         {/* BEFORE GAME START */}
//         {!running && time === 60 && (
//           <div className="text-center text-gray-300">

//             <div className="text-6xl animate-bounce">
//               🐞
//             </div>

//             <h2 className="text-xl mt-4 text-white">
//               Ready to Hunt Bugs?
//             </h2>

//          <p className="text-sm mt-2 text-white bg-black/50 px-3 py-1 rounded">
//               Click “Start Game” and kill as many bugs as you can in 60 seconds
//             </p>

//           </div>
//         )}

//         {/* BUGS */}
//         {bugs.map((bug) => (
//           <div
//             key={bug.id}
//             onClick={() => killBug(bug.id)}
//             className="absolute text-4xl cursor-pointer hover:scale-110 transition"
//             style={{
//               left: `${bug.x}%`,
//               top: `${bug.y}%`,
//             }}
//           >
//             🐞
//           </div>
//         ))}

//         {/* GAME OVER */}
//         {!running && time === 0 && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">

//             <h2 className="text-2xl text-red-400">
//               Game Over
//             </h2>

//             <p className="mt-2">
//               Final Score: {score}
//             </p>

//             <button
//               onClick={startGame}
//               className="mt-4 px-4 py-2 bg-blue-500 rounded"
//             >
//               Play Again
//             </button>

//           </div>
//         )}

//       </div>

//       {/* SEO CONTENT */}
//       <div className="max-w-2xl text-gray-400 text-sm mt-6">

//         <h2 className="text-white mb-2">
//           About This Game
//         </h2>

//         <p>
//           Bug Killer Game is a free online browser game where players improve
//           reaction speed by clicking bugs quickly. No download required.
//         </p>

//         <div className="mt-4">

//           <h2 className="text-white mb-2">
//             How to Play
//           </h2>

//           <p>
//             Start the game and click on bugs before they disappear.
//             Score as many points as possible within 60 seconds.
//           </p>

//         </div>

//         <div className="mt-4">

//           <h2 className="text-white mb-2">
//             Game Features
//           </h2>

//           <ul className="list-disc pl-5 space-y-1">
//             <li>Free online browser game</li>
//             <li>Fast reaction gameplay</li>
//             <li>Mobile friendly design</li>
//             <li>High score system</li>
//             <li>No download required</li>
//           </ul>

//         </div>

//       </div>

//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";

export default function App() {
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0
  );

  // SUPPORTED BUG ICONS
  const bugIcons = ["🐞", "🕷️","🦋"];

  // SOUND
  const hitSound = useRef(null);

  // PRELOAD SOUND
  useEffect(() => {
    hitSound.current = new Audio("/hit.mp3");
    hitSound.current.preload = "auto";
  }, []);

  // START GAME
  const startGame = () => {
    setScore(0);
    setTime(60);
    setBugs([]);
    setRunning(true);
  };

  // BUG SPAWN SYSTEM
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {

      const bug = {
        id: Date.now() + Math.random(),

        // BETTER POSITIONING
        x: 5 + Math.random() * 85,
        y: 5 + Math.random() * 80,

        // RANDOM BUG
        icon: bugIcons[Math.floor(Math.random() * bugIcons.length)],
      };

      setBugs((prev) => [...prev, bug]);

      // REMOVE BUG AFTER 2 SECONDS
      setTimeout(() => {
        setBugs((prev) => prev.filter((b) => b.id !== bug.id));
      }, 2000);

    }, 600);

    return () => clearInterval(interval);

  }, [running]);

  // TIMER SYSTEM
  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {

      setTime((t) => {
        if (t <= 1) {
          setRunning(false);
          setBugs([]);
          return 0;
        }

        return t - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [running]);

  // SAVE HIGH SCORE
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [score, highScore]);

  // KILL BUG
  const killBug = (id) => {

    // PLAY SOUND
    if (hitSound.current) {
      hitSound.current.currentTime = 0;

      hitSound.current.play().catch(() => {});
    }

    setScore((s) => s + 1);

    setBugs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-4">

      {/* SEO HEADER */}
      <div className="text-center max-w-2xl mb-4">

        <h1 className="text-3xl font-bold text-green-400">
          🐞 Bug Killer Game Online
        </h1>

        <p className="text-gray-400 mt-2">
          Play this free insect reaction game online. Click bugs quickly,
          improve your reaction speed, and beat your high score.
        </p>

      </div>

      {/* SCORE BOARD */}
      <div className="flex flex-wrap justify-center gap-6 mb-3 text-lg">

        <p>
          🎯 Score:
          <span className="text-yellow-400 ml-1">{score}</span>
        </p>

        <p>
          🏆 High Score:
          <span className="text-green-400 ml-1">{highScore}</span>
        </p>

        <p>
          ⏳ Time:
          <span className="text-red-400 ml-1">{time}</span>
        </p>

      </div>

      {/* START BUTTON */}
      {!running && (
        <button
          onClick={startGame}
          className="px-6 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          Start Game
        </button>
      )}

      {/* GAME AREA */}
      <div
        className="relative mt-4 w-full max-w-3xl h-[500px] rounded overflow-hidden flex items-center justify-center bg-center bg-cover border-4 border-green-900"
        style={{
          backgroundImage: "url('/gamearea.jpg')",
        }}
      >

        {/* BEFORE GAME START */}
        {!running && time === 60 && (
          <div className="text-center text-gray-300">

            <div className="text-6xl animate-bounce">
              🐞
            </div>

            <h2 className="text-xl mt-4 text-white">
              Ready to Hunt Bugs?
            </h2>

            <p className="text-sm mt-2 text-white bg-black/50 px-3 py-1 rounded">
              Click “Start Game” and kill as many bugs as you can in 60 seconds
            </p>

          </div>
        )}

        {/* BUGS */}
        {bugs.map((bug) => (
          <div
            key={bug.id}
            onClick={() => killBug(bug.id)}
            className="absolute text-4xl cursor-pointer hover:scale-110 transition"
            style={{
              left: `${bug.x}%`,
              top: `${bug.y}%`,
            }}
          >
            {bug.icon}
          </div>
        ))}

        {/* GAME OVER */}
        {!running && time === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">

            <h2 className="text-2xl text-red-400">
              Game Over
            </h2>

            <p className="mt-2">
              Final Score: {score}
            </p>

            <button
              onClick={startGame}
              className="mt-4 px-4 py-2 bg-blue-500 rounded"
            >
              Play Again
            </button>

          </div>
        )}

      </div>

      {/* SEO CONTENT */}
      <div className="max-w-2xl text-gray-400 text-sm mt-6">

        <h2 className="text-white mb-2">
          About This Game
        </h2>

        <p>
          Bug Killer Game is a free online browser game where players improve
          reaction speed by clicking bugs quickly. No download required.
        </p>

        <div className="mt-4">

          <h2 className="text-white mb-2">
            How to Play
          </h2>

          <p>
            Start the game and click on bugs before they disappear.
            Score as many points as possible within 60 seconds.
          </p>

        </div>

        <div className="mt-4">

          <h2 className="text-white mb-2">
            Game Features
          </h2>

          <ul className="list-disc pl-5 space-y-1">
            <li>Free online browser game</li>
            <li>Fast reaction gameplay</li>
            <li>Mobile friendly design</li>
            <li>High score system</li>
            <li>No download required</li>
            <li>Multiple insect types</li>
          </ul>

        </div>

      </div>

    </div>
  );
}