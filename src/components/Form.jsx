import React, {useState,useEffect} from 'react'

function Form(props) {
    const [formData,setFormData]=useState({searchTerm:""})
    const handleChange=(event)=>{
        //handleChange let the program know it is being filled out
        setFormData({...formData,[event.target.name]:event.target.value})
    }//event is the import, target is the input
    //target.name is the searchTerm
    // -----^when input value is changed... lets track it^----------
    const handleSubmit=(event)=>{
        event.preventDefault();
        //prevent page from refreshing upon submission
        props.moviesearch(formData.searchTerm)
    }
    // ----^when submit is pressed... store value in input^------------
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* form tag let the code know something has to be submitted */}
            <input 
            type="text" name="searchTerm"
            //name="searchTerm": searchTerm is part of the props that was passed in
            onChange={handleChange}
            value={formData.searchTerm}/>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form