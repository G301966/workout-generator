// Include both single and combined strength exercises
const strengthExercises = [
  // Original Single Strength Exercises
  "Dumbbell Squat",
  "Dumbbell Row",
  "Dumbbell Chest Press",
  "Dumbbell Lunge",
  "Dumbbell Thruster",
  "Dumbbell Deadlift",
  "Dumbbell Shoulder Press",
  "Dumbbell Romanian Deadlift",
  "Dumbbell Bicep Curl",
  "Dumbbell Tricep Extension",

  // Combined Exercises (1–18 and 35–40 as previously discussed)
  "Squat to Overhead Press",
  "Lunge to Lateral Raise",
  "Reverse Lunge to Biceps Curl",
  "Deadlift to Upright Row",
  "Goblet Squat to Triceps Extension",
  "Front Squat to Front Raise",
  "Sumo Squat to Hammer Curl",
  "Split Squat to Arnold Press",
  "Deadlift to Bent-Over Row",
  "Squat to High Pull",
  "Lunge to Single-Arm Row",
  "Glute Bridge to Pullover",
  "Clean to Front Squat to Press",
  "Step-Up to Biceps Curl to Press",
  "Deadlift to Curl to Press",
  "Renegade Row to Push-Up",
  "Plank to Front Raise",
  "Side Lunge to Woodchopper",
  "Squat + Curl + Press",
  "Deadlift + Row + Triceps Kickback",
  "Push-Up + Renegade Row + Knee Tuck",
  "Lunge + Torso Twist + Knee Drive",
  "Side Lunge + Curtsy Lunge + Front Kick",
  "Mountain Climber + Push-Up + Squat Jump"
];

// Cardio Exercises (1–15)
const cardioExercises = [
  "Jumping Jacks",
  "High Knees",
  "Butt Kicks",
  "Mountain Climbers",
  "Burpees",
  "Skater Hops",
  "Jump Rope (or Invisible Jump Rope)",
  "High-Intensity Step-Ups",
  "Squat Jumps",
  "Tuck Jumps",
  "Frog Jumps",
  "Plank Jacks",
  "Lateral Shuffle",
  "Spot Sprint",
  "Bear Crawls"
];

function pickRandomExercises(arr, count) {
  let available = [...arr];
  let chosen = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * available.length);
    chosen.push(available[randomIndex]);
    available.splice(randomIndex, 1);
  }
  return chosen;
}

function pickRandomCardio(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateWorkout() {
  // Pick 5 strength exercises from the combined pool
  const chosenStrength = pickRandomExercises(strengthExercises, 5);
  const workoutDiv = document.getElementById('workout');
  workoutDiv.innerHTML = ""; // Clear previous results

  for (let round = 1; round <= 5; round++) {
    // For each round, we take the first 'round' number of exercises
    const roundExercises = chosenStrength.slice(0, round).join(", ");
    const roundCardio = pickRandomCardio(cardioExercises);

    const roundDiv = document.createElement('div');
    roundDiv.className = 'round';
    roundDiv.innerHTML = `
      <h2>Round ${round}</h2>
      <p>${roundExercises}</p>
      <p>2 Minutes: ${roundCardio}</p>
    `;
    workoutDiv.appendChild(roundDiv);
  }
}

// Attach event listener to the button
document.getElementById('generateBtn').addEventListener('click', generateWorkout);
