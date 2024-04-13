"use client"
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import PlusIcon from "@/components/iconsvg/PlusIcon";
export default function ListOfSliderProductOnPage({ name, des, des_more, type_props, detail_props }) {
    const handleClick = (e) => {
        // console.log( e.target.children[1])
        // const el =  e.target.children[1];
        // console.log(el.getBoundingClientRect().height)
        e.target.classList.toggle('active')
     };
    return (
        <>
            <h1>{name}</h1>
            <div className="mutil-p">
                <p>{des}</p>
                <p>{des_more}</p>
                <br></br>
            </div>

            <div className="gr-dropdown" id="dropdown_info_onDetailProduct">
                <ul>
                    {type_props.map((item, index) => (
                        <li key={index} onClick={handleClick}>
                            <div className="title">
                                <span className="text">{item}<span className="underline-effect-styles"></span></span>
                                <PlusIcon />
                            </div>
                            <div className="info">
                                <p>{detail_props[index]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="gr-btn">
                <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Contact Us</ButtonHoverSplit>
            </div>
        </>
    )
}