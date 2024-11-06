import Profile from '../assets/bbbb.png'

export const Header = (props) => {
  return (
   <header>
      <dic className="logo">
        <img src={Profile} alt="" />
        <h1>{props.Head}</h1>
      </dic>
      <div className="themeSelector">
        <span className="light activeTheme"></span>
        <span className="dark"></span>
        <span className="medium"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
   </header>
  )
}


