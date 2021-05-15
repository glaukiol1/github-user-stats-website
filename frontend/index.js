const makehtml = (obj,usrname) => {
    return `
    <h2>Name: ${obj.name}</h3>
    <div id="stats">
        <img src="https://github-readme-stats.vercel.app/api?username=${usrname}&hide_rank=true">
        <h3>Rank: ${obj.rank.level}</h4>
        <h3>Score: ${Math.floor(obj.rank.score)} | Full Score: ${obj.rank.score}</h4>
        <div id="scores">
            <hr>
            <h4>Ranks/Scores</h4>
            <ul>
                <li> B+ (Everyone) | 61-100 Score </li>
                <li> A+ (Top 60%) | 46-60 Score </li>
                <li> A++ (Top 45%) | 26-45 Score </li>
                <li> S (Top 25%) | 1-25 Score </li>
                <li> S+ (Top 1%) | >=1 Score </li>
            </ul>
            <h4>NOTE: The lower the score, the better!</h4>
        </div>
    </div>
    `
}

document.getElementById('main_submit').addEventListener('click', (ev) => {
    const username = document.getElementById('main_input').value;
    if(!username) {
        alert('Please enter a username!')
    } else {
        const result_div = document.getElementById('result')

        fetch('/api/?username='+username)
            .then(response=>response.json())
            .then(json => {
                result_div.innerHTML=makehtml(json,username)
            })
    }
})