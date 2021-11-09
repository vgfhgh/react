import Button from './Button'
import './Nav.css'

function Nav(){
    const navigate = (url) =>{
        window.location.href = url
    }
    return(
        <div className="nav-container">
            <Button size="small" handleClick={()=> navigate('http://google.com')}>구글</Button>
            <Button size="small" handleClick={()=>navigate('http://naver.com')}>네이버</Button> 
            <Button size="small" handleClick={()=>navigate('http://google.com')}>사전검색 서비스</Button>  
        </div>
    )
}

export default Nav