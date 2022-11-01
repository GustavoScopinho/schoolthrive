import './style.css'
import setaDireita from '../../assets/seta-direita.svg'

export default function Header() {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="logo">
            <h3>Brandname</h3>
          </div>
          <nav>
            <p>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>Contact</p>
          </nav>
          <div className="container-login">
            <p>Login</p>
            <button>
              JOIN US <img src={setaDireita} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
