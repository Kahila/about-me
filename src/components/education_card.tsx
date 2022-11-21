import '../App.css';

const Education = (props: any) => {
    return (
        <div className='block'>
            <div className='right-block'>
                <b><h4 className='heading-block'> {props.schoolName} </h4></b>
                <p className='year-block'> {props.qualification} </p>
                <p className='year-block'> {props.year} </p>
            </div>
        </div>
    );
}

export default Education;