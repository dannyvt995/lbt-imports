

export default function CircleIcon({color})  {
    return (
       <span>
         <svg width="12" height="12" viewBox="0 0 12 12" fill={(color !== null || color !== undefined ? color : 'white')} xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
       </span>
    );
}

