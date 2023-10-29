//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="How many principles are there in the UDL Guidelines?"
choice1[1]="2"
choice1[2]="3"
choice1[3]="9"
choice1[4]="12"

question[2]="One of the main goals of the UDL framework is to remove what from educational environments?"
choice2[1]="Testing"
choice2[2]="Curriculum"
choice2[3]="Decoding"
choice2[4]="Barriers"

question[3]="Students learning in an environment designed with the UDL framework will be:"
choice3[1]="Purposeful and motivated"
choice3[2]="Resourceful and knowledgeable"
choice3[3]="Strategic and goal-directed"
choice3[4]="All of the above"

question[4]="Informed by the UDL Guidelines, educators anticipate and welcome:"
choice4[1]="Learner variability"
choice4[2]="Learner challenges"
choice4[3]="Learner differences"
choice4[4]="Learner complexity"

question[5]="The UDL framework is most appropriate for:"
choice5[1]="Students with learning differences"
choice5[2]="Teachers with special education certification"
choice5[3]="All students and teachers"
choice5[4]="Classrooms with computers"

question[6]="When designing instruction grounded in the UDL Guidelines, educators begin with:"
choice6[1]="Clear goals"
choice6[2]="Clear boundaries"
choice6[3]="Clear foundations"
choice6[4]="Clear tests"

question[7]="When teachers begin to implement UDL in their practice, they:"
choice7[1]="Include all 27 checkpoints in every lesson"
choice7[2]="Realize UDL is just 'good teaching'"
choice7[3]="Make minor adjustments overtime informed by the UDL Guidelines"
choice7[4]="Work less hours than before"

question[8]="The UDL Guidelines have been included in:"
choice8[1]="2008 US Higher Education Opportunity Act"
choice8[2]="2016 US Every Students Succeeds Act (ESSA)"
choice8[3]="2018 United Nations Flagship Report on Disability and Development"
choice8[4]="All of the above"

question[9]="In order to implement UDL, educators need:"
choice9[1]="Digital devices"
choice9[2]="Students with disabilities"
choice9[3]="Published curriculum based on the UDL Guidelines"
choice9[4]="None of the above"

question[10]="The UDL Guidelines are derived from:"
choice10[1]="Neuroscience"
choice10[2]="Anthropology"
choice10[3]="History"
choice10[4]="Architecture"

solution[1]="b"
solution[2]="d"
solution[3]="d"
solution[4]="a"
solution[5]="c"
solution[6]="a"
solution[7]="c"
solution[8]="d"
solution[9]="d"
solution[10]="a"
