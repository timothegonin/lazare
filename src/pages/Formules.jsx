import PagesNavigation from '../components/PagesNavigation'
import FormuleCard from '../components/FormuleCard'

const Formules = () => {
  return (
    <>
      <PagesNavigation />
      <section className="bg-[#F2F2F2] p-5 pt-10 flex flex-col items-center gap-5">
        <h1 className="hidden">Les menus</h1>
        <FormuleCard />
        <FormuleCard />
      </section>
    </>
  )
}

export default Formules
