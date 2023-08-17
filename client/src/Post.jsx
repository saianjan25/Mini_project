import img1 from "../public/tajmahal.jpeg"

export default function Post(){
    return(
        <div className="flex flex-col justify-center items-center p-4 shadow-xl mb-4 sm:flex-row">
            <img src={img1} className="w-full h-full sm:w-60 sm:h-44" alt="..." />
            <div className="flex flex-col p-3">
              <p className="text-slate-800 font-semibold  text-lg sm:text-2xl">Taj Mahal</p>
              <div className="flex text-violet-600 text-sm space-x-3">
                <a >Tati Sai Anjan</a>
                <time>13-06-2023 20:26</time>
              </div>
              <p className="mt-2">The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh</p>
            </div>
          </div>
    );
}