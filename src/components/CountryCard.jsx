const CountryCard = ({flag, name, population, region, subregion, capital, languages, borders}) => {
    return (
        <>
        <article align="center">
            <h3>{name}</h3>
            <aside className="article-flag">
              <img src={flag} alt="" width="200px" height="200px" />
            </aside>
            <div className="article-main">
              <div className="flex f-btw">
                <div className="row">
                  <ol className="items">
                    <li>
                      <strong><h2>Population: </h2></strong>{population}
                    </li>
                    <li>
                    <strong><h2>Region: </h2></strong><span>{region}</span>
                    </li>
                    <li>
                    <strong><h2>Sub Region: </h2></strong> <span>{subregion}</span>
                    </li>
                    <li>
                    <strong><h2>Capital: </h2></strong><span>{capital}</span>
                    </li>
                  </ol>
                </div>
                <div className="last-row">
                <strong><h2>Languages: </h2></strong><span>{languages}</span>
                </div>
              </div>
              <div className="article-end">
              <strong><h2>Border Countries: </h2></strong>
              {borders.map(border => (
                    <li>{border}</li>
                ))}
              </div>
            </div>
          </article>
        </>
    )
}

export default CountryCard