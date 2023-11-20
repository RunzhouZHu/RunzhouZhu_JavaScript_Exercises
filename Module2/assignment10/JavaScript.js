// Candidates initialization.
let numberOfCandidates = parseInt(prompt("Please enter the number of candidates: "))
const voteCount = []

for(let i=1;i<=numberOfCandidates;i++)
{
    let name = prompt(`Please enter the name of candidate ${i}: `);
    let votes = 0 ;
    const candidate = {name:name, votes:votes};
    voteCount.push(candidate);
}

// Voters
let numberOfVoters = parseInt(prompt("Please enter the number of voters: "))
for(let i = 1;i<=numberOfVoters;i++)
{
    let vote = prompt("Please enter who you vote for: ")
    voteCount.forEach(name =>{
        if(vote === name.name)
        {
            name.votes++;
        }
    })
}

// Compare
const result = []
result.push(voteCount[0])
for(let i=0;i<voteCount.length;i++)
{
    if(result[0]<voteCount[i+1])
    {
        result.unshift(voteCount[i+1]);
    }
    else
    {
        result.push(voteCount[i+1]);
    }
}

// Output
console.log(`The winner is ${result[0].name} with ${result[0].votes} votes.`);
console.log('results: ');
result.forEach(name =>{
    console.log(`${name.name} : ${name.votes} votes.`);
})