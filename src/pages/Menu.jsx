const Menu = () => {
  return (
    <section className="bg-[#F2F2F2] p-10 text-left flex flex-col gap-5">
      <h1>La carte</h1>
      <table className="w-full">
        <th>
          <h2>ENTRÉES</h2>
        </th>
        <tr>
          <td>
            Maquereaux, arc en ciel de choux, vinaigrette estragon et miel de
            Tautavel
          </td>
          <td className="align-top">17€</td>
        </tr>
      </table>
      <table className="w-full">
        <th>
          <h2>PLATS</h2>
        </th>
        <tr>
          <td>Dos de lieu jaune sauvage au savagnin, salsifis et trompettes</td>
          <td className="align-top">35€</td>
        </tr>
      </table>
      <table className="w-full">
        <th>
          <h2>DESSERTS</h2>
        </th>
        <tr>
          <td>Crème brulée chou fleur, vanille bleue</td>
          <td className="align-top">15€</td>
        </tr>
      </table>
    </section>
  )
}

export default Menu
