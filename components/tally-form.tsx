import { ReactNode } from 'react'

const TallyForm = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <button
        data-tally-open="w8agLP"
        data-tally-layout="modal"
        data-tally-overlay="1"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="5000"
      >
        {children}
      </button>
    </>
  )
}

export default TallyForm
