import React from 'react'


class RegisterPage extends React.Component {
    render(){
        return(
            <div id="registerPage">
                <form>
                    <h1>Remplissez vos informations</h1>

                    <p>  
                        <label>Nom : 
                            <input type="text" name="email" value="" />
                        </label>
                    </p>

                    <p>  
                        <label>Prénom : 
                            <input type="text" name="prenom" value="" />
                        </label>
                    </p>

                    <p>  
                        <label>Age : 
                            <input type="text" name="age" value="" />
                        </label>
                    </p>

                    <p>  
                        <label>E-mail : 
                            <input type="text" name="email" value="" />
                        </label>
                    </p>
                    <p>
                        <label>Mot de Passe : 
                            <input type="password" name="password" value=""/>
                        </label>
                    </p>

                    <p>
                        <label>Confirmation du Mot de Passe : 
                            <input type="password" name="passwordConf" value=""/>
                        </label>
                    </p>

                    <p><input type="submit" value="S'inscrire"/></p>
                </form>
                
            </div>
        )
    }
}


export default RegisterPage