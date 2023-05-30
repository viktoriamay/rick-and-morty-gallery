import './BurgerMenu.scss'


export const BurgerMenu = ({onClick, activeBurger}) => {
  return (
    <div className='burger_button' onClick={onClick}>
       <div className={activeBurger ? "burger_btn active": "burger_btn"}></div>
    </div>
  )
}