



export default function MenuIcon({ color }) {
    return (
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill={(color !== null || color !== undefined ? color : 'white')}>
                <path d="M4 6H20M4 12H20M4 18H20" stroke={(color !== null || color !== undefined ? color : 'white')} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

