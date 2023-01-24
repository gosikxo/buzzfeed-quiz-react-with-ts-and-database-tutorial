import React from 'react'
import { Question } from '../../interfaces'

export const QuestionBlock = ({
    question,
    setChosenAnswerItems,
    setUnansweredQuestionIds,
    unansweredQuestionIds,
    quizItemId
}: {
    question: Question,
    setChosenAnswerItems: Function,
    setUnansweredQuestionIds: Function,
    unansweredQuestionIds: number[] | undefined,
    quizItemId: number
}) => {

    const handleClick = () => {
        setChosenAnswerItems((prevState: string[]) => [...prevState, question.text])
        setUnansweredQuestionIds(unansweredQuestionIds?.filter((id) => id !== quizItemId))
    }


    return (
        <button
            className='question-block'
            onClick={handleClick}
        >
            <img src={question.image} alt={question.alt} />
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>{question.credit} </a>
                <a href='https://www.unsplash.com'>Unsplash</a>
            </p>
        </button>
    )
}
