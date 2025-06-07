import { useState, useEffect, useRef } from 'react';

export default function ChatArea({ selectedUser, onClose }) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const inputRef = useRef(null);

    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
        '😘', '😗', '😙', '😚', '😋', '😜', '🤪', '😝',
        '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '😶', '😏',
    ];

    useEffect(() => {
        if (selectedUser) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [selectedUser]);


    const handleEmojiClick = (emoji) => {
        setMessage((prev) => prev + emoji);
        setShowEmojiPicker(false);
        inputRef.current?.focus();
    };

    if (!selectedUser) return null;

    //className={` fixed bottom-0 left-0 lg:left-auto lg:right-4 w-full sm:w-80 max-w-sm bg-white rounded-t-lg shadow-xl border transition-all duration-500 z-50 
      //      ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
    
    return (
        <div
            className="w-full lg:w-[100%] xl:w-[50%] relative bg-white shadow-md rounded-md max-h-max"
        >
            <div>
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-lg">
                    <div className="flex items-center gap-3">
                        <img
                            src={selectedUser.avatar}
                            alt={selectedUser.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-semibold">{selectedUser.name}</p>
                            <p className="text-xs text-green-600">Active •</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                {/* Messages */}
                <div className="p-3 h-[30rem] lg:h-[20rem] overflow-y-auto text-sm flex items-center justify-center">
                    <p className="text-center text-gray-400 mt-10">Start your conversation...</p>
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                    <div className="absolute bottom-16 left-2 w-64 max-h-56 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-50">
                        <div className="grid grid-cols-8 gap-2 text-lg">
                            {emojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => handleEmojiClick(emoji)}
                                    className="hover:scale-110 transition-transform"
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input */}
                <div className="flex items-center gap-3 p-2 border-t bg-gray-50 relative">
                    <button
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                        className="text-xl"
                        title="Emoji"
                    >
                        😊
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type your message"
                        className="w-[70%] flex-1 px-1 py-2 text-sm border rounded-full focus:outline-none focus:ring"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className=" text-blue-500 text-xl">➤</button>
                </div>
            </div>
        </div>
    );
}
