const Loading = ({text}) => {
    return (
        <div className="loader">
           <span className="loading">
               Loading...
           </span>
           <p>
               Please Wait while loading {text}, this should take a second. 
           </p>
        </div>
    )
}

export default Loading
