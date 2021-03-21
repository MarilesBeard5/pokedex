import SingleType from './SingleType';

const TypeList = ({ types }) => {
    return (
        <div className='badges-container'>
            {types.map((type, index) => {
                return (
                    <SingleType key={'type-' + index}
                        type={type}
                    >
                    </SingleType>
                )
            })}
        </div >
    )
}

export default TypeList
