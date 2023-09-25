import './HeroHeader.css';

const HeroHeader = () => {
    return (
        <div className='hero-header'>
            <img src='src/assets/header.png' alt='New Collection' />
            <div className='hero-text'>
                <h1>New Collection</h1>
                <p><span>Fall 2023</span></p>
            </div>
        </div>
    );
};

export default HeroHeader;