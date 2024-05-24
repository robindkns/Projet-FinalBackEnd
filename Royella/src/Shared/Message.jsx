export default function Message(props) {

    const handleMessage = () => {
        props.setOpenMessage(false)
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