import { Input, Radio, RadioGroup, Checkbox, CheckboxGroup, Textarea } from '@nextui-org/react'
import { QuizQuestion } from '../types/quiz'

interface QuestionProps {
  question: QuizQuestion
  value: any
  onChange: (value: any) => void
}

function Question({ question, value, onChange }: QuestionProps) {
  switch (question.type) {
    case 'text':
      return (
        <Input
          label={question.question}
          placeholder={question.placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          isRequired={question.required}
          className="max-w-xl"
        />
      )

    case 'single_choice':
      return (
        <RadioGroup
          label={question.question}
          value={value}
          onValueChange={onChange}
          isRequired={question.required}
        >
          {question.options?.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      )

    case 'multiple_choice':
      return (
        <CheckboxGroup
          label={question.question}
          value={value || []}
          onValueChange={onChange}
          isRequired={question.required}
        >
          {question.options?.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )

    case 'textarea':
      return (
        <Textarea
          label={question.question}
          placeholder={question.placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          isRequired={question.required}
          className="max-w-xl"
        />
      )

    default:
      return null
  }
}

export default Question 