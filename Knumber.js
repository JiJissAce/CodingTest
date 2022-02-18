function solution(array, commands) {
    var answer = [];
    let sliceArray = [];
    for (let i = 0 ; i < commands.length ; i++)
        {
            sliceArray = array.slice(commands[i][0]-1,commands[i][1]);
            sliceArray.sort((a,b) => a - b);
            answer.push(sliceArray[commands[i][2]-1]);
        }
    return answer;
}