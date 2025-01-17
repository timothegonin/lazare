import PagesNavigation from '../components/PagesNavigation'

const Menu = () => {
  return (
    <>
      <PagesNavigation />
      <section className="bg-[#F2F2F2] p-10 text-left flex flex-col gap-5 items-center ">
        <h1 className="hidden">La carte</h1>
        <div className="bg-white rounded p-3 w-full max-w-screen-sm">
          <table className="w-full">
            <tbody>
              <tr>
                <th>
                  <h2>ENTRÉES</h2>
                </th>
              </tr>
              <tr>
                <td>
                  Maquereaux, arc en ciel de choux, vinaigrette estragon et miel
                  de Tautavel
                </td>
                <td className="align-top text-right font-semibold">17€</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <th>
                  <h2>PLATS</h2>
                </th>
              </tr>
              <tr>
                <td>
                  Dos de lieu jaune sauvage au savagnin, salsifis et trompettes
                </td>
                <td className="align-top text-right font-semibold">35€</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <th>
                  <h2>DESSERTS</h2>
                </th>
              </tr>
              <tr>
                <td>Crème brulée chou fleur, vanille bleue</td>
                <td className="align-top text-right font-semibold">15€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Menu
