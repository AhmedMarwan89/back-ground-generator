import "./search-box.component.css"
 const SearchBox =(props)=> {
        const {onChangeHandler , className ,placeHolder}=props
        return ( 
            <div>
            <input 
            type="search"
            className={`search-box ${className}`}
            onChange={onChangeHandler}
            placeholder={placeHolder}
            />
            </div>
        )
    }


export default SearchBox