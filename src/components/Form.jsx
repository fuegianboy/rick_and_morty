import React from 'react';
import validation from "./Validation"
// import estilos from "./Form.module.css";


export default function Form(props) {

  const [userData, setUserData] = React.useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = React.useState({
      email: "",
      password: "",
    })
    
    const handleChange = (e)=> {
      const {name, value} = e.target
      setUserData({...userData,[name]: value})
      setErrors(validation({...userData,[name]:value,}))
    }
      //..............................
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      props.login(userData)
    }

   return (
    // className={styles.container}
    <div  >
        <form onSubmit={handleSubmit}>
            {/* <img src="../ruta_de_la_imagen" alt="Imagen" /> */}
            <label>EMAIL</label>
            <input
                name="email" 
                value={userData.email} 
                onChange={handleChange}
                placeholder="Escribe tu email..." 
                type="text"
            />
            {/* className={styles.error} */}
            <p >{errors.email ? errors.email : null }</p> 
            <label>PASSWORD</label>
            <input
                name="password" 
                value={userData.password} 
                onChange={handleChange}
                placeholder="" 
                type="password"
            />
            {/* className={styles.error} */}
            <p >{errors.password ? errors.password : null }</p> 
            <hr />
            <button type="submit">GET IN !</button>

        </form>
    </div>
   )
}