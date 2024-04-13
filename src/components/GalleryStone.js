import Image from "next/image"
export default function GalleryStone() {
    return (
        <section id="gallery_stone" className="light-background">
            <div className="grid12-container grid-continer-4row">
                <div className="row1">
                    <Image src="/construction/1.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="row1">
                    <Image src="/construction/2.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100%"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="row2">
                    <Image src="/construction/3.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100%"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="row3">
                    <Image src="/construction/4.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '100%' }}
                    />
                </div>
                <div className="row3">
                    <Image src="/construction/5.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '100%' }}
                    />
                </div>
                <div className="row3">
                    <Image src="/construction/6.jpg" alt="project1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '100%' }}
                    />
                </div>
            </div>
        </section>
    )
}