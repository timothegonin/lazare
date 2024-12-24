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

  return (
    <article className="flex flex-col items-start">
      <div className="flex justify-between w-full font-bold">
        <h4>MENU DE L&apos;AUTOMNE À L&apos;HIVER</h4>
        <h5>59€</h5>
      </div>
      <div className={isOpen ? '' : 'hidden'}>
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
        réduire
      </button>
    </article>
  )
}

export default FormuleCard
