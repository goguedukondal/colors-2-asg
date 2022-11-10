const Comp = ({  color_name,color_code }) => {
    
    return (
        <>
        

            
                
                    <div className = "displays" style={{ height:135, width:110}}>
                        <p style={{height:100, width:110, backgroundColor:`${color_code}`}}> </p>
                        <p className="text"  >{color_code}</p>
                        <span className="text"  style={{color:`${color_code}`, fontSize:10}} >{color_name}</span>

                    </div>
                
            
        </>
    )
}

export default Comp;