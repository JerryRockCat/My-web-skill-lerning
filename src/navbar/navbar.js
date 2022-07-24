import './navbar.css';
function Navebar (){
    return(
    <nav className='topbar2'>
              <div className='toplife'>
                <li className='Logo'  >My world </li>
                {/* http://localhost:3000/singup */}
                <li className='Singup'> <a href='http://localhost:3000/singup'>Singup</a></li>
                {/* http://localhost:3000/login */}
                <li className='Login'> <a href='http://localhost:3000/login'>Login </a></li>
          </div>
        </nav>
    );
}
          export default  Navebar;