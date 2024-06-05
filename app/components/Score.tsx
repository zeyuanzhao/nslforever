export default function Score({answers}: {answers: number[]}) {
  let total = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === 1) {
      total++;
    }
  }
  return <div>
    <h2>Score: {total}/{answers.length}</h2>
  </div>
}