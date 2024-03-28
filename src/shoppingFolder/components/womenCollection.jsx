const WomenCollection=(props)=>{
    const{title,img1,img2,img3,img4,img5,img6}= props.ladiesFashoin
    return(
        <div className="collectSection">
            <h2>{title}</h2>
            <div className="bannnerBox">

            <img src="./images/womens/womenBanner.gif" />
            </div>
            <div className="manImages">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img6}/>
            </div>
        </div>

    )
}
export default WomenCollection