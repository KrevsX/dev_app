import { VscBug} from 'react-icons/vsc'

export function Post(){
    return <div>
        <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error=>console.error(error))
    }}>
        <VscBug/>
        Traer Datos
        </button>
        <hr/>
    </div>
        
        
    // <ul>
    //     <li>TITULO DE PUBLICACION</li>
    //     <li>TITULO DE PUBLIACION 2</li>
    // </ul>
}