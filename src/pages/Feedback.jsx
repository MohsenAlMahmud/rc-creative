

const Feedback = () => {
    return (
        <div className="p-10">
            <h2 className="text-5xl text-center font-semibold py-5">Customers Love...</h2>
            <div className="flex gap-10">
            <div className="w-1/2">
                <h4 className="text-xl font-semibold">Sarah's Special Day:</h4>
                <p className="italic">"Our wedding day was pure magic, thanks to <span className="text-blue-500 italic">RC creative</span>. - Sarah"</p>
                <h4 className="text-xl font-semibold">John & Emily's Bliss:</h4>
                <p className="italic">"A decade of love celebrated flawlessly by <span className="text-blue-500 italic">RC creative</span>. - John & Emily"</p>
                <h4 className="text-xl font-semibold">Sophia's Birthday Delight:</h4>
                <p className="italic">"Our daughter's party was an absolute hit, all thanks to you! - Sophia"</p>
            </div>
            <div className="w-1/2">
                <h4 className="text-xl font-semibold">Oliver's Party Perfection:</h4>
                <p className="italic">"You turned our vision into a party beyond our dreams! - Oliver"</p>
                <h4 className="text-xl font-semibold">Grace's Seamless Celebrations:</h4>
                <p className="italic">"Every detail was flawless, and our event was unforgettable. - Grace"</p>
                <h4 className="text-xl font-semibold">Michael's Memories Forever:</h4>
                <p className="italic">"Thanks to your team, we now have cherished memories. - Michael"</p>
            </div>
        </div>
        </div>
    );
};

export default Feedback;