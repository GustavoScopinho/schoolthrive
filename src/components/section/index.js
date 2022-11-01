import './style.css'
import fotoMenina from '../../assets/imagem-menina.png'

export default function Section() {
  return (
    <>
      <section>
        <div className="container-left">
          <p>Best dental surgeons</p>
          <h1>25K+ STUDENTS TRUST US</h1>
          <h4>Our goal is to make online education work for everyone</h4>
          <div className="container-button">
            <button className="button-1">Get Quote Now</button>
            <button className="button-2">Learn More</button>
          </div>
        </div>
        <div className="container-right">
          <img src={fotoMenina} />
        </div>
      </section>
      <div className="container-visita">
        <div>
          <h1>15K</h1>
          <h5>Happy Customers</h5>
        </div>
        <div>
          <h1>150K</h1>
          <h5>Monthly Visitors</h5>
        </div>
        <div>
          <h1>15</h1>
          <h5>Countries Worldwide</h5>
        </div>
        <div>
          <h1>100+</h1>
          <h5>Top Partners</h5>
        </div>
      </div>
    </>
  )
}
