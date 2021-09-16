const Error = ({text,msg}) => {
    return (
        <div className="loader">
           <span className="error">
           Error
           </span>
           <p>
            could Not be Loaded: {msg} {text} 
           </p>
        </div>
    )
}

export default Error