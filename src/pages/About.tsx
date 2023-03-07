import React from 'react'

const About = () => {
  return (
    <>
      <img src="/about-hero.png" alt="hero" />
      <div className='grid w-10/12 m-auto mt-5 gap-5'>
        <section className='flex flex-col-reverse'>
          <img src="/about01.png" alt="about01" />
          <div>
            <h2 className='font-bold '>SOBRE NOSOTROS</h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
            <p>En Mirador Hotel, contamos con modernas habitaciones equipadas y finamente decoradas con un estilo elegante y acogedor, tratando de brindar un ambiente cálido, especial para el descanso y relajación.</p>
          </div>
        </section>
        <section>
          <div>
            <h2 className='font-bold relative'>NUESTRA MISIÓN <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
          <img src="/about02.png" alt="about02" />
        </section>
        <section className='flex flex-col-reverse'>
          <img src="/about03.png" alt="about03" />
          <div>
            <h2 className='font-bold relative'>NUESTRA VISIÓN <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
        </section>
        <section>
          <div>
            <h2 className='font-bold relative'>NUESTROS VALORES <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
          <img src="/about04.png" alt="about04" />
        </section>
      </div >
    </>
  )
}

export default About