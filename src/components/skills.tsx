import '../App.css';

const Skills = (props ?: any) => {
    return (
        <div className='block'>
            <div className='left-block'>
                <img src={props.image} className="icon" alt={props.language} />
            </div>
            <div className='right-block'>
                <b><p className='heading-block'>{props.language} </p></b>
                <progress className="bar" value={props.percentage} max="100">  </progress>
            </div>
        </div>
    );
}

export default Skills;