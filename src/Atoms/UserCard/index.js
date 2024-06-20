const UserCard = ({image, fullName}) => {
 

    const textStyle = {
        fontSize: '14px',
        fontWeight: 'bold'
    };

    const imageStyle = {
        width: '200px',
        height: 'auto',
        marginRight: '8px',
        border: 'solid 1px',
    }

    return(
        <div >
            <figure>
            <img src= { image } alt={`${fullName} profile`}  style={imageStyle}/>
             
            <figcaption>
            <h3 style={textStyle}>{ fullName }</h3>
            </figcaption>
            </figure>
        </div>
    );
    
};

export default UserCard;


