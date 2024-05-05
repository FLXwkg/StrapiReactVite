import { useCart } from '../../contexts/cartContext'
import { Button } from '@nextui-org/react'
import PanierItem from '../../components/Panier/PanierItem'

function MonPanier () {
  const { state, resetCart } = useCart()

  const handleReset = () => {
    resetCart()
  }

  return (
    state.items
      ? (
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-evenly bg-gray-200 p-4'>
            <p className='w-1/5 text-center'>Image</p>
            <p className='w-1/5 text-center'>Nom du produit</p>
            <p className='w-1/5 text-center'>Prix</p>
            <p className='w-1/5 text-center'>Quantité</p>
            <div className='w-1/5 text-center' />
          </div>
          {state.items.map((item) => (
            <PanierItem key={item.item.id} item={item} />
          ))}
          <div className='flex flex-row justify-center'>
            <Button className='p-4 mt-4' onClick={handleReset}>Vider le panier</Button>
          </div>
        </div>
        )
      : (
        <div className='flex flex-col items-center gap-5'>
          <p className='text-center text-gray-600'>Le panier est vide.</p>
          <Button><a href='/'>Ajouter des articles</a></Button>
        </div>
        )
  )
}

export default MonPanier
