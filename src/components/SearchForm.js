import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <section className="section-search">
      <form className="search-form" action="">
        <div className="search-form-control">
          <label htmlFor="name">search your favourate mill</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchMeal}
          />
        </div>

      </form>
    </section>
  )
}

export default SearchForm
