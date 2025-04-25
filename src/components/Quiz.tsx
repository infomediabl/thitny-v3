import { useState } from 'react'
import { Card, Progress, Button } from '@nextui-org/react'
import quizData from '../data/quiz.json'
import { QuizData, QuizSection } from '../types/quiz'
import Question from './Question'

export interface QuizState {
  currentSection: number
  currentQuestion: number
  answers: Record<string, any>
  sessionId: string
}

function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    sessionId: crypto.randomUUID()
  })

  const data = quizData as QuizData
  const currentSection = data.sections[state.currentSection]
  const totalQuestions = data.sections.reduce(
    (acc: number, section: QuizSection) => acc + (section.questions?.length || 0),
    0
  )
  const questionsAnswered = Object.keys(state.answers).length
  const progress = (questionsAnswered / totalQuestions) * 100

  const handleAnswer = (questionId: string, value: any) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }))
  }

  const handleNext = () => {
    if (state.currentSection < data.sections.length - 1) {
      setState(prev => ({
        ...prev,
        currentSection: prev.currentSection + 1
      }))
    }
  }

  const handlePrevious = () => {
    if (state.currentSection > 0) {
      setState(prev => ({
        ...prev,
        currentSection: prev.currentSection - 1
      }))
    }
  }

  const isCurrentSectionValid = () => {
    if (!currentSection.questions) return true
    return currentSection.questions.every(question => {
      if (!question.required) return true
      const answer = state.answers[question.id]
      if (Array.isArray(answer)) return answer.length > 0
      return answer !== undefined && answer !== ''
    })
  }

  return (
    <div className="quiz-container">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600">
          {data.description}
        </p>
      </div>

      <Card className="quiz-card">
        <Progress 
          aria-label="Quiz progress" 
          value={progress}
          className="mb-8"
        />
        
        {currentSection.questions && (
          <div className="space-y-6">
            {currentSection.questions.map(question => (
              <div key={question.id} className="space-y-4">
                <Question
                  question={question}
                  value={state.answers[question.id]}
                  onChange={(value) => handleAnswer(question.id, value)}
                />
                {question.booster && (
                  <p className="text-sm text-blue-600 italic mt-2">
                    {question.booster}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={state.currentSection === 0}
                variant="bordered"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isCurrentSectionValid() || state.currentSection === data.sections.length - 1}
                color="primary"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

export default Quiz 