var answer1 = { value: 'dog', question: 0, isCorrect: true };
var answer2 = { value: 'robot', question: 0, isCorrect: false };
var answer3 = { value: 'Austin', question: 1, isCorrect: true };

var questions = ['what type of animal are you?', 'what city are you from?', 'how tall are you?'];
var answers = [answer1, answer2];

var unorderedList = document.getElementById('answers');

var currentPage = 1;

function newQuestion() {
    /// Remove old answers and questions
    var questionAnswers = answers.filter((answer) => answer.question === currentPage);

    // render question
    var h2 = document.createElement('h2');
    h2.textContent = questions[currentPage];
    document.body.appendChild(h2);

    // render answers with event listeners on them
    questionAnswers.forEach((answer) => {
        var li = document.createElement('li');
        li.textContent = answer.value;
        li.addEventListener(
            'click'
            /* function which determines correct or incorrect pick 
         currentPage++
        newQuestion();
*/
        );
        unorderedList.appendChild(li);
    });
}

newQuestion();