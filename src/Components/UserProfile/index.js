import './index.css'

const UserProfile = (props)=>{
    const {userDetails} = props
    const {imageUrl, name, role} = userDetails
    console.log(name)
    return(
        <li>
            <img src={imageUrl} className="avatar" alt='avatar' />
            <div className='user-card-container'>
                <h1 className='text'>{name}</h1>
                <p className='user-card-desc'>{role}</p>
            </div>
        </li>
        
        )
    
}

export default UserProfile