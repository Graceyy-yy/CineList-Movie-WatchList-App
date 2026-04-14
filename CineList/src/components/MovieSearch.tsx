
import { BiSearchAlt2 } from "react-icons/bi"; 




export const MovieSearch = () => {
  return (
    <div className = 'py-20 text-center items-center justify-between'>
     
      <h2 >CineList, the World of movies</h2>

      <p className ='paragraph'>
        Search for movie below:
      </p>

    <div className='p-2'>
       <input
       
      placeholder='Search for movie'>

      </input>

      <button>
        <BiSearchAlt2 className = 'text-white/70 text-4xl -mx-10 -my-3 '/>
      </button>
    </div>
     
      
    
    </div>
  )
}
