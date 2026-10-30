import Image from "next/image";
import Couple from "../../Image/Couple.jpg";


function FirstCountDown()
{
    return(
        <div>
           <Image src={Couple} alt="Couple" />
        </div>
    )
}
export default FirstCountDown;