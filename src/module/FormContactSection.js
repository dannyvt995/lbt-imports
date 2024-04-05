import ButtonHoverSplit from '@/components/ButtonHoverSplit'
export default function  FormContactSection() {
    return (
        <div className="form-contact-section">

            <div className="content">
                <div className="top row1  grid12-container-nonmargin ">
                    <div className="text">
                        <h3>Let touch with us</h3>
                    </div>
                </div>
                <div className="bot row2 grid12-container-nonmargin ">
                    <div className="input"><input className="input-style-hover" placeholder="Enter your mail here..." /></div>
                    <div className="submit">
                    <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Submit</ButtonHoverSplit>
                    </div>
                </div>
            </div>
        </div>
    )
}