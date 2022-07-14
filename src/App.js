import './App.css';
import {useState , useEffect} from 'react'
import SearchBox from "./components/search-box/search-box.component"
import CardList from "./components/card-list/card-list.component.jsx"
//every set state in different value or change props means run the entire function again
const App =()=>{
  console.log("render")
  const [searchField , setSearchField]=useState('')
  const [monsters , setMonsters]=useState([])
  const [filteredMonsters , setFilteredMonsters]=useState(monsters)
  const [title , setTitle]=useState("")

  const [string , setstring]=useState('')
  useEffect(()=>{
    console.log("effect A is fired")
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users=>setMonsters(users))
  },[])

  useEffect(( )=>{
    const NewFilteredMonsters=monsters.filter((monster)=>{return monster.name.toLowerCase().includes(searchField)})
    setFilteredMonsters(NewFilteredMonsters)
    console.log("effect is fired")
  },[monsters , searchField])
  
 
  



  const onSearchChange=(event)=>{
      const searchFieldString = event.target.value.toLowerCase()
      setSearchField(searchFieldString);
      }
  const onTitleChange=(event)=>{
      const TitleString = event.target.value.toLowerCase()
      setTitle(TitleString);
      }

   



  return (
    <div className="App">
      <h1 className="app-title">  {title}  </h1>
      <SearchBox onChangeHandler={onSearchChange} className="search-monster-box" placeHolder="search monster"/> 
      <SearchBox onChangeHandler={onTitleChange} className="search-monster-box" placeHolder="set title"/>    
      <CardList monsters={filteredMonsters}/>     
  </div>

  )
}









export default App;
