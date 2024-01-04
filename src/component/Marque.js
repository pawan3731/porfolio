function Marque() {

    const ImpressData = [
        {id:1, text: 'Instead of interrupting, work on attracting', },
        {id:2, text: 'Just because you are the loudest, does not make you right', },
        {id:3, text: 'Content is king', },
        {id:4, text: 'Master the topic, the message, and the delivery', },
        {id:5, text: 'Either write something worth reading or do something worth writing about', },
    ];

    return (
        <section className="digitalMarque lightBg">
            <div className="container">
                <div className="marqueInner">
                    <div className="marqueTrack">
                        <div className="content">
                            <h1>
                                {ImpressData.map((data, index) => {
                                    return (
                                        <>
                                            <span key={index}>{data.text}<i>. </i></span>
                                        </>
                                    )
                                })}
                            </h1> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marque;