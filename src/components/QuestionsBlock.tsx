import React from 'react'
import { Content, Question } from '../../interfaces'
import { QuestionBlock } from './QuestionBlock'

export const QuestionsBlock = ({
  quizItem,
  setChosenAnswerItems,
  setUnansweredQuestionIds,
  unansweredQuestionIds,
  chosenAnswerItems
}: {
  quizItem: Content,
  setChosenAnswerItems: Function,
  setUnansweredQuestionIds: Function,
  unansweredQuestionIds: number[] | undefined,
  chosenAnswerItems: string[]
}) => {
  return (
    <div>
      <h2 id={String(quizItem.id)} className='title-block'>{quizItem.text}</h2>
      <div className='questions-container'>
        {quizItem?.questions.map((question: Question, _index: number) => (
          <QuestionBlock
            key={_index}
            question={question}
            setChosenAnswerItems={setChosenAnswerItems}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
            unansweredQuestionIds={unansweredQuestionIds}
            quizItemId={quizItem.id}
            chosenAnswerItems={chosenAnswerItems}
          />
        ))}
      </div>
    </div>
  )
}
