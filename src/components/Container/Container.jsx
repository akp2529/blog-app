import React from "react";

function Container({children}) {
    // return (
    //     <div className="w-full max-w-7xl mx-auto px-4">
    //         {children}
    //     </div>
    // )

    // above code can be written as [if there is a single line to return]
    return <div className="w-full max-w-7xl mx-auto px-4">
        {children} </div> ;
}

export default Container