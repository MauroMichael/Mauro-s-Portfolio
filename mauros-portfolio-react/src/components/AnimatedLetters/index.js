import './index.scss';

const AnimatedLetters = ({letterClass, srtArray, idx}) => {
    return (
        <span> 
            {
                srtArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;