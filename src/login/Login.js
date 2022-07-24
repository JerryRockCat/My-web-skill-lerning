import './Login.css'
function Loginform() {
    return (
        <div className='allbox'>
        <img src='https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&h=800&q=80'></img>
        <div className="Login-form">
            <h1 className='h1login'>Login</h1>
            <article className="Loginform-article">
                <form>
                    <label for= "Email"> 
                        Email <br></br>
                    <input className='logintext1' type="text" />
                    <br></br>
                    </label> <br></br>
                    <label for="password">
                        Password <br></br>
                        <input className='logintext2' type="text" /> <br></br> <br></br>
                        <input className='Loginsubmit' type="Submit" value="Submit" />
                    </label>
                </form>
            </article>
        </div>
        </div>
    );
  }
  
  export default Loginform;