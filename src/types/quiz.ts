export interface QuizOption {
  value: string
  label: string
  trigger?: string
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'text' | 'single_choice' | 'multiple_choice' | 'textarea'
  required: boolean
  placeholder?: string
  options?: QuizOption[]
  variables?: string[]
  variable?: string
  internal_note?: string
  displayCondition?: {
    questionId: string
    operator: 'equals' | 'notEquals'
    value: string
  }
  booster?: string
}

export interface QuizSection {
  id: string
  title: string
  questions?: QuizQuestion[]
  type?: 'info_section'
  content?: string
  displayCondition?: {
    questionId: string
    operator: 'equals' | 'notEquals'
    value: string
  }
}

export interface QuizData {
  title: string
  description: string
  metadata: {
    version: string
    dataCollection: Record<string, string>
  }
  tableOfContents: {
    title: string
    sections: string[]
    note: string
  }
  sections: QuizSection[]
} 