import './Singup.css'
function Signup(){
    return (
        <div className='allpage'>
        <img src='https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&h=800&q=80'></img>
        <div className="Singup-form">
            <h1 className="h1singup">Singup</h1>
            <article className="Singupform">
                <form>
                    <label className='Email' for="Email">
                        Email <br></br>
                        <input className='Email2' type="text" />
                    </label> <br></br>
                    <br></br>
                    <label className='Password' for="Password">
                        Password <br></br>
                        <input className='Password2' type="text" />
                    </label> <br></br>
                    <br></br>
                    <label className='Confirm' for="Confirm password">
                        Confirm password <br></br>
                        <input className='Confirm2' type="text" /> <br></br>
                        <br></br>
                        <input className='Singupsubmit' type="Submit" value="Submit" />
                    </label>
                </form>
            </article>
        </div>
        </div>
    );
}
export default Signup;