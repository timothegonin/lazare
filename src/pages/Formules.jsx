import PagesNavigation from '../components/PagesNavigation'
import FormuleCard from '../components/FormuleCard'

const Formules = () => {
  return (
    <>
      <PagesNavigation />
      <section className="bg-[#F2F2F2] px-5 py-20 flex flex-col items-center gap-5 h-full">
        <h1 className="hidden">Les menus</h1>
        <FormuleCard />
        <FormuleCard />
      </section>
    </>
  )
}

export default Formules
