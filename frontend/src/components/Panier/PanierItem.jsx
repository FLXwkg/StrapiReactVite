import { XCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { useCart } from '../../contexts/cartContext'

function PanierItem ({ item }) {
  const { removeFromCart } = useCart()
  const { name, price, pictures } = item.item.attributes
  const url = process.env.REACT_APP_BASE_URL + pictures.data[0].attributes.url

  const handleRemove = () => {
    removeFromCart(item.item.id)
  }

  return (
    <div className='flex flex-row items-center justify-evenly border h-20 '>
      <img src={url} alt='image' className='w-16' />
      <p className='p-4'>{name}</p>
      <p>{price} €</p>
      <p>{item.qty}</p>
      <Button color='danger' onClick={handleRemove}>
        <XCircleIcon className='w-5' />
        Supprimer
      </Button>
    </div>
  )
}

export default PanierItem
