import { useState } from 'react'

const FormuleCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const Divider = () => {
    return (
      <tr className="text-center font-bold">
        <td>ou</td>
      </tr>
    )
  }

  const formuleDetailsStatus = isOpen ? '' : 'hidden'

  return (
    <article className="flex flex-col items-start bg-white rounded p-3 w-full max-w-screen-sm min-w-96">
      <div className="flex justify-between w-full font-bold">
        <h4>MENU DE L&apos;AUTOMNE À L&apos;HIVER</h4>
        <h5>59€</h5>
      </div>
      <div className={`${formuleDetailsStatus} flex flex-col gap-5`}>
        <table className="text-left w-4/5">
          <tr>
            <th>AMUSE BOUCHE</th>
          </tr>
          <tr>
            <th>ENTRÉES</th>
          </tr>
          <tr>
            <td>Crémeux d&apos;époisse d&apos;automne</td>
          </tr>
          <Divider />
          <tr>
            <td>
              Maquereaux, arc en ciel de choux, vinaigrette estragon et miel de
              Tautavel
            </td>
          </tr>
        </table>
        <table className="text-left w-3/4">
          <tr>
            <th>L’ASSIETTE DE FROMAGES</th>
            <th>15€</th>
          </tr>
          <tr>
            <th>ENTRÉES</th>
          </tr>
          <tr>
            <td>Assortiment de fromages du pays, sélectionnés par nos soins</td>
          </tr>
        </table>
      </div>
      <button onClick={() => handleOpen()} className="text-[#C7A99A]">
        {isOpen ? 'Réduire' : 'Détails'}
      </button>
    </article>
  )
}

export default FormuleCard
