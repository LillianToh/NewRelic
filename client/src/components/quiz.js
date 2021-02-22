import React, { useState } from 'react';
import QuizForm from '../components/quizForm';
// import GetLeaderBoard from '../components/getleaderboard';

	function Quiz(){
		const questions = [
		{
			questionText: 'Forest covers how much (in percentage) of planet Earth?Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '30%', isCorrect: true },
				{ answerText: '20%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '5%', isCorrect: false },
			],
		}, 
		{
			questionText: 'At the current rate of deforestration, we can loose our rainforest completely in ___years.Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '1000 years', isCorrect: false },
				{ answerText: '100 years', isCorrect: true },
				{ answerText: '200 years', isCorrect: false },
				{ answerText: '500 years', isCorrect: false },
			],
		},
		{
			questionText: 'Forestry and Agriculture are responsible for ____ of greenhouse gas emmission. Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '5%', isCorrect: false },
				{ answerText: '24%', isCorrect: true },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '15%', isCorrect: false },
			],
		},
		{
			questionText: 'When trees are felled they release___ into the atmosphere?Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: 'Smoke', isCorrect: false },
				{ answerText: 'Water', isCorrect: false },
				{ answerText: 'Oxygen', isCorrect: false },
				{ answerText: 'Carbon', isCorrect: true },
			],
		},

		{
			questionText: 'Why is the increased carbon in the atmosphere bad for earth?Hint:Watch video for answers',
			answerOptions: [
				{ answerText: 'Air becomes too hazy', isCorrect: false },
				{ answerText: 'Increases the speed of global warming', isCorrect: true },
				{ answerText: 'Atmosphere becomes too cloudy', isCorrect: false },
				
			],
		},

		{
			questionText: 'Forests provide habitat to ___ of animals and plants on the planet. Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '50%', isCorrect: false },
				{ answerText: '30%', isCorrect: false },
				{ answerText: '80%', isCorrect: true },
				{ answerText: '10%', isCorrect: false },
			],
		},

		{
			questionText: 'Deforestration impacts biodiversity. The estimate is___ rainforest species goes extinct each year?Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '1 thousand to 3 thousand', isCorrect: false },
				{ answerText: '4 thousand to 6 thousand', isCorrect: true },
				{ answerText: 'none', isCorrect: false },
				{ answerText: '2 thousand to 4 thousand', isCorrect: true },
			],
		},

		{
			questionText: 'Some ___ billion people rely on rainforest for food and shelter. Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '0.5', isCorrect: true },
			],
		},

		{
			questionText: 'Which is the biggest driver of deforestration? Fill in the blank with the right answer.Hint:Watch video for answers',
			answerOptions: [
				{ answerText: 'Agriculture', isCorrect: true },
				{ answerText: 'Housing development', isCorrect: false },
				{ answerText: 'Building of roads', isCorrect: true },
				{ answerText: 'Floods', isCorrect: true },
			],
		},


		{
			questionText: 'How can we combat deforestration and prevent further loss of biodiversity?',
			answerOptions: [
				{ answerText: 'Managing forest resources', isCorrect: true },
				{ answerText: 'Eliminating clear cutting', isCorrect: true },
				{ answerText: 'Planting new trees', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},



	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const awarenessVideo = {
		awarenessVideo:
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ic-J6hcSKa8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		
	  };

	function Iframe(props) {
		return (
		  <div
			dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
		  />
		);
	}
	

	
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<QuizForm />
					{/* <GetLeaderBoard/> */}
					
				</div>
			) : (
				<>
				<h2>Get started</h2>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button btn btn-lg onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					))}
					<Iframe iframe={awarenessVideo["awarenessVideo"]} allow="autoplay" />,
					</div>
					
				</>
			)}
		</div>
	);
}

export default Quiz;






