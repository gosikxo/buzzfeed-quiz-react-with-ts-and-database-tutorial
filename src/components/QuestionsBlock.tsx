import React from 'react'
import { Content } from '../../interfaces'

export const QuestionsBlock = ({ quizItem }: {
  quizItem: Content
}) => {
  return (
    <div>
      <h2 id={String(quizItem.id)}>{quizItem.text}</h2>
    </div>
  )
}
