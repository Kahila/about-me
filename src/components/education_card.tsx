import '../App.css';

const Education = (props: any) => {
    return (
        <div className='block'>
            <div className='left-block'>
                <img src={props.image} className="icon" alt={props.schoolName} />
            </div>
            <div className='right-block'>
                <b><p className='heading-block'> {props.schoolName} </p></b>
                <p className='year-block'> {props.qualification} </p>
                <p className='year-block'> {props.year} </p>
            </div>
        </div>
    );
}

export default Education;