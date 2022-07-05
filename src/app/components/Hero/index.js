import { AiOutlinePlayCircle } from 'react-icons/ai'

function Hero() {
  return (
    <div className="relative">
      <img className="rounded-xl max-h-[500px] object-cover" src="https://sm.ign.com/t/ign_in/image/h/how-to-wat/how-to-watch-doctor-strange-in-the-multiverse-of-madness-rel_2vug.1280.jpg" loading="lazy" alt="" />
      <div className="absolute md:top-12 md:left-10 top-5 left-5">
        <h1 className="md:text-4xl text-3xl font-bold text-white">Multiverse Of Madness</h1>
        <button className="text-center text-white mt-5 font-bold rounded-lg py-2 px-3 flex items-center bg-red-500 border-2 border-red-400 shadow-md"><AiOutlinePlayCircle size={21}/><span className="ml-2">Watch Now</span></button>
      </div>
    </div>
  )
}

export default Hero