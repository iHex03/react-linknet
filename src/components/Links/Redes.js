import './redes.css'

const Redes = () => {
    
    const ListaRedes = [
        {id: 0, urlNome: 'Github', url: 'https://github.com/iHex03'},
        {id: 1, urlNome: 'Email', url: 'dev.mmattos@gmail.com'},
        {id: 2, urlNome: 'Linkedin', url: 'https://www.linkedin.com/in/marcelm03/'}
    ]

    const LinkRedes = ListaRedes.map((props) =>
    <div key={props.id} className='conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )

    return(
    <>
        {LinkRedes}
    </>
    )
}

export default Redes