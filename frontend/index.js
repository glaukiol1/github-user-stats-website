const makehtml = (obj) => {
    return `
    <h3>${obj.name}</h3>
    <div id="stats">
        <ul>
            <li>Contributed To: ${obj.contributedTo}</li>
            <li>Total Commits: ${obj.totalCommits}</li>
            <li>Total Issues: ${obj.totalIssues}</li>
            <li>Total Pull Requests: ${obj.totalPRs}</li>
            <li>Total Stars: ${obj.totalStars}</li>
        </ul>
        <h4>Rank: ${obj.rank.level}</h4>
        <h4>Score: ${Math.floor(obj.rank.score)}</h4>
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
                result_div.innerHTML=makehtml(json)
            })
    }
})