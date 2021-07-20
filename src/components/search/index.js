import * as React from "react"

const Search = () => (
  <>
    {/* --====== SEARCH BOX PART START ======-- */}

    <div className="search-box">
      <div className="closebtn">
        <span></span>
        <span></span>
      </div>
      <div className="searchform">
        <form action="#">
          <input type="text" placeholder="Search"/>
            <button type="button"><i className="fa fa-search" aria-label="search" /></button>
            </form>
        </div>
      </div>

      {/* ====== SEARCH BOX PART ENDS ====== */}
  </>
)

export default Search