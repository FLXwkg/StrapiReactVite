import { createContext, useContext, useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET: 'RESET'
}

const initialState = {
  items: [], // [{item: {}, qty: X}]
  total: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        // On vérifie si le panier contient déjà l'item
        items: state.items
          ? state.items.some(cartItem => cartItem.item.id === action.data.item.id)
            ? state.items.map(cartItem => {
              if (cartItem.item.id === action.data.item.id) {
                return { ...cartItem, qty: cartItem.qty + 1 }
              }
              return cartItem
            })
            : state.items.concat([{ item: action.data.item, qty: 1 }])
          : [{ item: action.data.item, qty: 1 }]
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(cartItem => action.data.id !== cartItem.item.id)
      }
    case actionTypes.RESET:
      return { initialState }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const cartFactory = (dispatch) => ({
  addToCart: (item) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      data: { item }
    })
    toast.success('Produit ajouté au panier')
  },
  removeFromCart: (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      data: { id }
    })
    toast.success('Produit retiré au panier')
  },
  resetCart: () => {
    dispatch({
      type: actionTypes.RESET,
      data: {}
    })
    toast.success('Panier vidé avec succès')
  }
})

const CartProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('Cart')
  const _initialState = savedState ? JSON.parse(savedState) : initialState

  const [state, dispatch] = useReducer(cartReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('Cart', JSON.stringify(state))
  }, [state])
  return (
    <CartContext.Provider value={{ state, ...cartFactory(dispatch) }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart muse be used inside a CartProvider')
  return context
}

export {
  CartProvider,
  useCart
}
