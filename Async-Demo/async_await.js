console.log('Before');

async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubName);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
}

displayCommits();

console.log('After');

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user object from the database...');
            resolve({ id: id, githubName: 'kofidennis'}); 
        }, 2000);
    });
};


function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']); 
        }, 2000);
    });
};

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commits']); 
        }, 2000);
    });
};


