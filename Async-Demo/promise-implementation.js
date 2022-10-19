console.log('Before');

getUser(1)
    .then(user => getRepositories(user.githubName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commits', commits))
    .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id){
    return new Promise((resolve, reject) => {
        // kick of async operation
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


