const job = ['Freelancer', 'Network Engineer', 'Web Developer'];
let jobindex = 0;
let wordindex = 0;
let currentjob = '';
let words = '';

(function type(){
    if(jobindex == job.length){
        wordindex = 0;
    }

    currentjob = job[jobindex];

    words = currentjob.slice(0, ++wordindex);
    document.querySelector('.type').textContent = words;
    
    if(words.length == currentjob.length){
        jobindex++;
        wordindex = 0;
    }
    setTimeout(type, 500);

})();