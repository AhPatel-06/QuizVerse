const quizzes = [
 {id:"java",title:"Java Fundamentals",category:"PROGRAMMING",icon:"☕",color:"#fff0e5",iconColor:"#d96a29",description:"Classes, objects, data types and core Java concepts.",difficulty:"Beginner",minutes:3,questions:[
  {q:"Which keyword is used to create an object in Java?",o:["class","new","this","void"],a:1,e:"The new keyword allocates memory for an object and calls its constructor."},
  {q:"Which method is the usual entry point of a Java application?",o:["start()","run()","main()","init()"],a:2,e:"Java applications conventionally begin execution from public static void main(String[] args)."},
  {q:"Which of these is not a primitive data type in Java?",o:["int","boolean","String","char"],a:2,e:"String is a class, not a primitive type. int, boolean and char are primitive types."},
  {q:"What does OOP stand for?",o:["Object-Oriented Programming","Open Output Process","Ordered Operating Program","Object Output Protocol"],a:0,e:"OOP stands for Object-Oriented Programming, which organizes code around objects and classes."},
  {q:"Which keyword makes a variable's value unchangeable after assignment?",o:["static","final","private","const"],a:1,e:"In Java, final prevents a variable from being reassigned after initialization."}
 ]},
 {id:"cpp",title:"C++ Essentials",category:"PROGRAMMING",icon:"⌘",color:"#e9f0ff",iconColor:"#426bd2",description:"Variables, loops, functions and object-oriented basics.",difficulty:"Beginner",minutes:3,questions:[
  {q:"Which symbol ends most C++ statements?",o:[" : ",".","; ",","],a:2,e:"A semicolon terminates most C++ statements."},
  {q:"Which header is commonly used for input and output with cin and cout?",o:["<stdio.h>","<iostream>","<string>","<fstream>"],a:1,e:"The iostream header provides standard input and output stream objects such as cin and cout."},
  {q:"Which operator is used to access a member through an object directly?",o:["->","::",".","&"],a:2,e:"The dot operator accesses a member through an object; -> is commonly used through a pointer."},
  {q:"What is the index of the first element in a C++ array?",o:["1","-1","0","Depends on array size"],a:2,e:"C++ arrays use zero-based indexing, so the first element is at index 0."},
  {q:"Which loop checks its condition before each iteration?",o:["while","do-while only","switch","goto"],a:0,e:"A while loop checks its condition before executing each iteration."}
 ]},
 {id:"html",title:"HTML & Web Basics",category:"WEB DEVELOPMENT",icon:"◇",color:"#fff0e8",iconColor:"#df7545",description:"Structure pages with tags, links, forms and semantic HTML.",difficulty:"Beginner",minutes:3,questions:[
  {q:"What does HTML stand for?",o:["Hyper Trainer Marking Language","HyperText Markup Language","HighText Machine Language","HyperText Markdown Links"],a:1,e:"HTML stands for HyperText Markup Language and defines the structure of web pages."},
  {q:"Which tag creates a hyperlink?",o:["<link>","<a>","<href>","<url>"],a:1,e:"The anchor tag <a> creates hyperlinks, usually with an href attribute."},
  {q:"Which tag represents the largest standard heading?",o:["<head>","<h6>","<h1>","<header>"],a:2,e:"<h1> is the highest-level heading; <h6> is the lowest-level heading."},
  {q:"Which attribute provides alternative text for an image?",o:["title","src","alt","name"],a:2,e:"The alt attribute provides text alternatives for images, improving accessibility."},
  {q:"Which language is primarily used to style a web page?",o:["SQL","CSS","C++","Java"],a:1,e:"CSS controls visual presentation such as colors, layout, spacing and typography."}
 ]},
 {id:"dbms",title:"DBMS Basics",category:"DATABASES",icon:"▤",color:"#e4f8f0",iconColor:"#2b9b79",description:"Tables, keys, relationships and database integrity.",difficulty:"Beginner",minutes:3,questions:[
  {q:"What does DBMS stand for?",o:["Data Backup Management Service","Database Management System","Digital Base Mapping Software","Database Machine Structure"],a:1,e:"A Database Management System helps users create, store, retrieve and manage data."},
  {q:"Which key uniquely identifies each row in a table?",o:["Foreign key","Candidate value only","Primary key","Duplicate key"],a:2,e:"A primary key uniquely identifies each record in a table."},
  {q:"What does a foreign key help establish?",o:["Text formatting","A relationship between tables","A faster monitor","A file extension"],a:1,e:"A foreign key references a key in another table, helping maintain referential integrity."},
  {q:"Which SQL command retrieves data?",o:["GET","OPEN","SELECT","FETCH TABLE"],a:2,e:"SELECT queries and retrieves data from one or more tables."},
  {q:"Which constraint prevents a column from storing NULL values?",o:["UNIQUE","NOT NULL","DEFAULT","CHECK only"],a:1,e:"NOT NULL requires a value to be supplied for that column."}
 ]},
 {id:"logic",title:"Logical Reasoning",category:"APTITUDE",icon:"✧",color:"#f1eaff",iconColor:"#8c60c8",description:"Sharpen patterns, deduction and quick problem-solving.",difficulty:"Easy",minutes:3,questions:[
  {q:"What number comes next: 2, 4, 8, 16, ...?",o:["18","24","30","32"],a:3,e:"Each term is doubled: 2, 4, 8, 16, then 32."},
  {q:"If all roses are flowers and some flowers fade quickly, which statement must be true?",o:["All roses fade quickly","Some roses fade quickly","All roses are flowers","No flowers are roses"],a:2,e:"The first premise directly states that every rose is a flower. It does not say roses fade quickly."},
  {q:"Which item does not belong with the others?",o:["Triangle","Square","Circle","Cube"],a:3,e:"A cube is a three-dimensional solid; the other options are two-dimensional shapes."},
  {q:"A clock shows 3:00. What is the smaller angle between its hands?",o:["45°","60°","90°","180°"],a:2,e:"At 3:00 the minute hand points to 12 and the hour hand to 3, making a right angle of 90°."},
  {q:"If yesterday was Monday, what day is tomorrow?",o:["Tuesday","Wednesday","Thursday","Sunday"],a:1,e:"If yesterday was Monday, today is Tuesday and tomorrow is Wednesday."}
 ]},
 {id:"science",title:"Science Quick Test",category:"GENERAL SCIENCE",icon:"⚛",color:"#e5f4ff",iconColor:"#3284bd",description:"A quick mix of foundational physics and science concepts.",difficulty:"Easy",minutes:3,questions:[
  {q:"What is the SI unit of electric current?",o:["Volt","Ohm","Ampere","Watt"],a:2,e:"Electric current is measured in amperes (A)."},
  {q:"Which particle has a negative electric charge?",o:["Proton","Neutron","Electron","Nucleus"],a:2,e:"Electrons carry a negative electric charge."},
  {q:"What is the approximate speed of light in vacuum?",o:["3 × 10⁶ m/s","3 × 10⁸ m/s","3 × 10¹⁰ m/s","300 m/s"],a:1,e:"The speed of light in vacuum is approximately 3 × 10⁸ metres per second."},
  {q:"Which device converts electrical energy into mechanical rotation?",o:["DC motor","Transformer only","Fuse","Resistor"],a:0,e:"An electric motor converts electrical energy into mechanical energy."},
  {q:"What is the chemical formula for water?",o:["CO₂","O₂","H₂O","NaCl"],a:2,e:"A water molecule contains two hydrogen atoms and one oxygen atom: H₂O."}
 ]}
];
let currentQuiz=null, currentIndex=0, answers=[], timeLeft=180, timerId=null, reviewMode=false, lastResult=null;
let history = JSON.parse(localStorage.getItem("quizverseHistory")||"[]");
const $=id=>document.getElementById(id);
function showView(view){
 ["home","quiz","result","history","leaderboard"].forEach(v=>$(v+"View").classList.toggle("hidden",v!==view));
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===(view==="result"||view==="quiz"?"home":view)));
 const titles={home:"Dashboard",quiz:"Quiz in progress",result:"Your results",history:"My results",leaderboard:"Leaderboard"};$("pageTitle").textContent=titles[view]||"Dashboard";
 if(view==="home")updateStats();if(view==="history")renderHistory();if(view==="leaderboard")updateLeader();
 window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuizCards(){
 $("quizGrid").innerHTML=quizzes.map(q=>`<article class="quiz-card" tabindex="0" role="button" aria-label="Start ${q.title}" data-quiz="${q.id}">
 <div class="quiz-card-top"><div class="subject-icon" style="background:${q.color};color:${q.iconColor}">${q.icon}</div><span class="subject-tag">${q.category}</span></div>
 <h3>${q.title}</h3><p>${q.description}</p><div class="quiz-meta"><span>◷ ${q.minutes} min &nbsp;·&nbsp; ${q.questions.length} questions</span><span class="start-arrow">↗</span></div></article>`).join("");
 document.querySelectorAll("[data-quiz]").forEach(el=>{el.addEventListener("click",()=>startQuiz(el.dataset.quiz));el.addEventListener("keydown",e=>{if(e.key==="Enter")startQuiz(el.dataset.quiz)})});
}
function startQuiz(id){
 currentQuiz=quizzes.find(q=>q.id===id);currentIndex=0;answers=Array(currentQuiz.questions.length).fill(null);timeLeft=currentQuiz.minutes*60;reviewMode=false;
 clearInterval(timerId);showView("quiz");$("quizCategoryPill").textContent=currentQuiz.category;$("difficultyLabel").textContent=currentQuiz.difficulty.toUpperCase();renderQuestion();updateTimer();timerId=setInterval(()=>{timeLeft--;updateTimer();if(timeLeft<=0)finishQuiz()},1000);
}
function updateTimer(){const m=Math.floor(Math.max(0,timeLeft)/60),s=Math.max(0,timeLeft)%60;$("timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");$("timer").style.color=timeLeft<=30?"#d85d58":"#34334f"}
function renderQuestion(){
 const q=currentQuiz.questions[currentIndex];$("questionCounter").textContent=`QUESTION ${currentIndex+1} OF ${currentQuiz.questions.length}`;$("questionText").textContent=q.q;$("progressFill").style.width=((currentIndex+1)/currentQuiz.questions.length*100)+"%";
 $("optionsList").innerHTML=q.o.map((opt,i)=>`<button class="option ${answers[currentIndex]===i?"selected":""}" data-option="${i}"><span class="option-key">${String.fromCharCode(65+i)}</span><span>${escapeHTML(opt)}</span></button>`).join("");
 document.querySelectorAll("[data-option]").forEach(b=>b.addEventListener("click",()=>{answers[currentIndex]=Number(b.dataset.option);renderQuestion()}));
 $("prevBtn").disabled=currentIndex===0;$("nextBtn").textContent=currentIndex===currentQuiz.questions.length-1?"Submit quiz ✓":"Next question →";
 $("questionDots").innerHTML=currentQuiz.questions.map((_,i)=>`<button class="qdot ${i===currentIndex?"active":""} ${answers[i]!==null?"answered":""}" data-jump="${i}">${i+1}</button>`).join("");
 document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>{currentIndex=Number(b.dataset.jump);renderQuestion()}));
}
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function finishQuiz(){
 clearInterval(timerId);const qs=currentQuiz.questions;let correct=0;qs.forEach((q,i)=>{if(answers[i]===q.a)correct++});
 const percent=Math.round(correct/qs.length*100);lastResult={id:currentQuiz.id,title:currentQuiz.title,score:percent,correct,total:qs.length,date:new Date().toLocaleString(),answers:[...answers],questions:qs};
 history.unshift({id:lastResult.id,title:lastResult.title,score:percent,correct,total:qs.length,date:lastResult.date});history=history.slice(0,30);localStorage.setItem("quizverseHistory",JSON.stringify(history));showView("result");renderResult();
}
function renderResult(){
 const r=lastResult;if(!r)return;const deg=r.score*3.6;$("resultRing").style.background=`conic-gradient(#a99dff ${deg}deg,#ffffff25 ${deg}deg)`;$("resultPercent").textContent=r.score+"%";$("correctCount").textContent=r.correct;$("wrongCount").textContent=r.total-r.correct;$("totalCount").textContent=r.total;
 $("resultHeading").textContent=r.score===100?"Perfect score!":r.score>=80?"Excellent work!":r.score>=60?"Good progress!":"Keep practising!";
 $("resultMessage").textContent=r.score>=80?"You've got a strong grasp of this topic. Keep the momentum going!":r.score>=60?"You're on the right track. Review the explanations to level up.":"Every attempt is progress. Review the answers and give it another try.";
 $("reviewList").innerHTML=r.questions.map((q,i)=>{const good=r.answers[i]===q.a;return `<article class="review-item"><h3>${i+1}. ${escapeHTML(q.q)}</h3><div class="review-answer ${good?"good":"bad"}">${good?"✓ Your answer":"✕ Your answer"}: ${r.answers[i]===null?"Not answered":escapeHTML(q.o[r.answers[i]])}</div>${!good?`<div class="review-answer good">Correct answer: ${escapeHTML(q.o[q.a])}</div>`:""}<p class="review-explain">${escapeHTML(q.e)}</p></article>`}).join("");
}
function updateStats(){const count=history.length;$("quizCount").textContent=count;$("avgScore").textContent=count?Math.round(history.reduce((s,x)=>s+x.score,0)/count)+"%":"—";$("bestScore").textContent=count?Math.max(...history.map(x=>x.score))+"%":"—"}
function renderHistory(){if(!history.length){$("historyList").innerHTML='<div class="history-item"><div><strong>No quizzes completed yet</strong><p>Choose a quiz from your dashboard and your results will appear here.</p></div><span class="score-chip">Start now</span></div>';return}
 $("historyList").innerHTML=history.map(h=>`<div class="history-item"><div><strong>${escapeHTML(h.title)}</strong><p>${escapeHTML(h.date)} · ${h.correct}/${h.total} correct</p></div><span class="score-chip">${h.score}%</span></div>`).join("")}
function updateLeader(){const count=history.length;$("leaderQuizzes").textContent=count;$("leaderScore").textContent=count?Math.round(history.reduce((s,x)=>s+x.score,0)/count)+"%":"—"}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
$("exploreBtn").addEventListener("click",()=>$("quizSection").scrollIntoView({behavior:"smooth"}));
$("prevBtn").addEventListener("click",()=>{if(currentIndex>0){currentIndex--;renderQuestion()}});
$("nextBtn").addEventListener("click",()=>{if(currentIndex<currentQuiz.questions.length-1){currentIndex++;renderQuestion()}else if(confirm("Submit your quiz now? You cannot change answers after submitting.")){finishQuiz()}});
$("backBtn").addEventListener("click",()=>{if(confirm("Leave this quiz? Your current answers will not be saved.")){clearInterval(timerId);showView("home")}});
$("reviewBtn").addEventListener("click",()=>$("reviewList").scrollIntoView({behavior:"smooth"}));
$("retryBtn").addEventListener("click",()=>startQuiz(lastResult.id));
$("resultHomeBtn").addEventListener("click",()=>showView("home"));
renderQuizCards();updateStats();
// QuizVerse Demo Login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginScreen = document.getElementById("loginScreen");
    const loginMessage = document.getElementById("loginMessage");

    if (!loginForm || !loginScreen) return;

    // Keep the demo login active until the user logs in.
    loginScreen.style.display = "flex";

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document
            .getElementById("loginUsername").value.trim();
        const password = document
            .getElementById("loginPassword").value;

        if (username && password) {
            sessionStorage.setItem("quizverseDemoUser", username);
            loginScreen.style.display = "none";
        } else {
            loginMessage.textContent = "Please enter both fields.";
        }
    });

    // Skip the login screen if already logged in during this session.
    if (sessionStorage.getItem("quizverseDemoUser")) {
        loginScreen.style.display = "none";
    }
});
