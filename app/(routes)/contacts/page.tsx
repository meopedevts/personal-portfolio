import AboutContact from '@/components/contacts/about-contact'
import MediaContact from '@/components/contacts/media-contact'

export default function Contacts() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start justify-start px-5 xl:px-0">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-10 py-8 xl:px-0">
        <div className="align-center flex w-full max-w-5xl flex-col justify-between gap-4 md:flex-row xl:px-0">
          <AboutContact />
          <MediaContact />
        </div>
      </section>
    </main>
  )
}
