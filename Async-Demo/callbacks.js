console.log('Before');
getUser(1, function(user) {
    //Get Repositories
    getRepositories(user.githubName, (repos) => {
        console.log(`Repos: ${repos}`);
    }); 
});
console.log('After');


function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading user object from the database...');
        callback({ id: id, githubName: 'kofidennis'}); 
    }, 2000);
};

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']); 
    }, 2000);
};