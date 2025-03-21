import '../../styles/css/host.css'

function Host ({host}){
    const [first, ...rest] = host.name.split(' ');
    return (
        <div className='host'>
            <p className='host__hostname'>
                {first} <br/> {rest}
            </p>
            <img className='host__picture' src = {host.picture}/>
        </div>
    )

}

export default Host