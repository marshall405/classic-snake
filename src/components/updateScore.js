export default (currentScore) => {
    const score = document.getElementById('score');
    score.innerText = `Score: ${currentScore}`;
}