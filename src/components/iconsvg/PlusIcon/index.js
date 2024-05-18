

export default function PlusIcon({color})  {
    return (
        <span>
            <svg width="9" height="9" viewBox="0 0 9 9" fill={(color !== null || color !== undefined ? color : 'white')} xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
        </span>
    );
}

