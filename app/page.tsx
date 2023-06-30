import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constatnts'
import { FetchCars } from '@/utils'

export default async function Home({searchParams}: any) {
  const allCars = await FetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 20,
    model: searchParams.model || '',
  })
  const isFetchError = !Array.isArray(allCars) || allCars.length <1 || !allCars

  console.log(searchParams);
  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover' >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold' >Cars stock </h1>
          <p>Explore Cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
        <div className='home__filters-container flex gap-3 mb-4'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
        </div>

        {
          !isFetchError ? (
            <section className='mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                allCars.map((car, index)=>{
                  let key = `${(index+5)*car.year}`
                  return <CarCard key={key} car={car}  />
                })
              }
              <ShowMore
                pageNumber={searchParams.limit || 15} 
                isNext = {(searchParams.limit || 15) > allCars.length}
               />
            </section>
          ) : (
            <section className='home__error-container'>
              <h2 className='text-black text-xl font-bold' >Oooops, No results</h2>
              <p>{allCars?.message}</p>
            </section>
          )
        }
      </div>
    </main>
  )
}
