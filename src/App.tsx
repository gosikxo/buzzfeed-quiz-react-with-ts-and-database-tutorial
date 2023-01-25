import React, { useState, useEffect } from 'react'
import { Title } from './components/Title'
import { Content, QuizData } from '../interfaces'
import { QuestionsBlock } from './components/QuestionsBlock'

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>()
  const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([])
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<number[] | undefined>([])

  console.log(chosenAnswerItems)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz-item')
      const json = await response.json()
      setQuiz(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const unasweredIds = quiz?.content?.map(({ id }: Content) => id)
    setUnansweredQuestionIds(unasweredIds)
  }, [quiz])

  useEffect(() => {
    if (unansweredQuestionIds) {
      const highestId = Math.min(...unansweredQuestionIds)
      const highestElement = document.getElementById(String(highestId))
      highestElement?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [unansweredQuestionIds])

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((content: Content, id: Content['id']) => (
        <QuestionsBlock
          key={id}
          quizItem={content}
          setChosenAnswerItems={setChosenAnswerItems}
          unansweredQuestionIds={unansweredQuestionIds}
          chosenAnswerItems={chosenAnswerItems}
          setUnansweredQuestionIds={setUnansweredQuestionIds}
        />
      ))}
    </div>
  )
}

export default App
