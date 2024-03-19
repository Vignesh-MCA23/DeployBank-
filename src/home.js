import image from "./badbank.jpg"
export default function Home(){
    return(
        <>
        <div id="home">
         <h3>Welcome to Wiki BANK</h3>
         <img src={image} alt="home" height='200px' width='350px'></img>

         <h4>"Online banking"</h4>
         <p> Empowering Financial Knowledge and Inclusion</p>
          <p>Creating account deposit money and withdraw your money safely
            .</p>

        </div>
        
       
        </>
    )
}
