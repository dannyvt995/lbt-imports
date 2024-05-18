import SliderStone from "./SliderStone"
import ButtonHoverUnderLine from "@/Interactive/ButtonHoverUnderLine";
import './style.css'
export default function SliderStoneSection() {
    return (
        <div className="list-products-section_3 light-background" >
        <div className="grid-container-2row">
            <div className="list-products-section_3_content  row1">
                <div className="grid12-container">
                    <div className="tag">
                        <p>[NATURAL STONE]</p>
                    </div>
                    <div className="list-wine flex-col">
                        <h3>Stone Contrustion from Australian</h3>

                        <div className="list-wine flex-col">
                            <div className="detail-willhidden mutil-p" style={{ padding: "var(--fz2) 0" }}>
                                <p>LBT IMPORTS PTY. LTD currently provides trusted basalt stone products in many domestic construction projects as well as exported to European, Asian, and Australian markets.</p>

                                <p>With the strength of basalt stone (laterite), it has the characteristics of hardness and good bearing capacity. The stone surface is sawed and cut without needing any treatment but has high roughness and is anti-slip. Widely used for indoor and outdoor wall cladding, sidewalk paving, campuses, courtyards in high-end residential projects,... With mastery of raw material sources and stone cutting saw processing factories . LBT IMPORTS is qualified to participate in signing and implementing contracts to supply basalt paving materials for large projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="view-more">
                        <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink="/natural-stone">View all</ButtonHoverUnderLine>
                    </div>

                </div>
            </div>
           <SliderStone/>
        </div>
    </div>
    )
}