import { useFetch } from './hooks/useFetch';
import Header from './component/Header/header';

import './styles/main.css';

type Repository = {
  name: string;
  species: string;
  image: string,
  origin: {
    name: string;
  }
}

function App() {
  const { data: repositories } = useFetch<Repository[]>('https://rickandmortyapi.com/api/character');

  return (
  <> 
  <Header />

  <section className="grid grid-cols-5 gap-4 my-8 mx-8">
    {repositories?.map(repo => {
      return (
        <div  key={repo.name}>
          
            <div className="bg-slate-200 rounded-xl shadow-lg">
              <div className="p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img className="rounded-2xl" src={repo.image} alt="" />
                </div>
                <h2 className="md:text-2xl text-center font-medium mt-3">{repo.name}</h2>
                <p className="text-center text-lg text-slate-500 mt-3">{repo.species}</p>
                <p className="text-center text-lg text-slate-500 mt-3">{repo.origin.name}</p>
              

            </div>

          </div>

        </div>
      )
    })}
  </section>
  </>
  );
}

export default App;

