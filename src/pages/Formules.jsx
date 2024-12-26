import PagesNavigation from '../components/PagesNavigation'
import FormuleCard from '../components/FormuleCard'

const Formules = () => {
  return (
    <>
      <PagesNavigation />
      <section className="bg-[#F2F2F2] p-5 flex flex-col gap-5">
        <h1>Les menus</h1>
        <FormuleCard />
        <FormuleCard />
      </section>
    </>
  )
}

export default Formules
