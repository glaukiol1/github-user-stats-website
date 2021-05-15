const makehtml = (json) => {

}

document.getElementById('main_submit').addEventListener('click', (ev) => {
    const username = document.getElementById('main_input').value;
    if(!username) {
        alert('Please enter a username!')
    } else {
        const result_div = document.getElementById('result')

        fetch('/api/?username'+username)
            .then(response=>response.json())
            .then(json => {
                console.log(json)
            })
    }
})