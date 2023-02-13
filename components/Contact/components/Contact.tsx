import { ProjectCard, useLoadContact } from '@/components'
import { ContactInfo, RecapchaModal } from '.'

export const Contact = () => {
  // Fetch contact info on render
  // if the token exists on the localStorage
  const { token, contact, handleTokenChange } = useLoadContact()

  return (
    <ProjectCard>
      <div className="relative">
        <ContactInfo token={token} contact={contact} />

        {/* If no contact info, then render Recapcha related component */}
        {!contact && (
          <RecapchaModal token={token} handleTokenChange={handleTokenChange} />
        )}
      </div>
    </ProjectCard>
  )
}
