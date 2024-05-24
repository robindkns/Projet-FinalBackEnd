import { useDispatch } from "react-redux";
import { setMessage } from "../Redux/features/userSlice";

export default function Message(props) {

    const dispatch = useDispatch()


    const handleMessage = () => {
        dispatch(setMessage({message: ''}))
        // props.setOpenMessage(false)
        setTimeout(() => {
            props.setOpenMessage(false)
        } , 10)
    }

    return (
        <div className="messages">
            <div className='message-close'>
                <i onClick={handleMessage} className="gg-close"></i>
            </div>
            {props.message}
        </div>
    );
}