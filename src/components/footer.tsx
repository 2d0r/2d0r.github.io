export default function Footer () {
    const gradientFooter = [];
    // for (let i = 12; i <= 60; i += 8) {
    //     gradientFooter.push(<>
    //         <div className='w-full h-[6px]' style={{height: `${i/2}px`}}></div>
    //         <div className='w-full bg-white' style={{height: `${i}px`}}></div>
    //     </>);
    // }
    for (let i = 60; i >= 0; i -= 3) {
        gradientFooter.push(<div key={i}>
            <div className='w-full bg-white' style={{height: `${1}px`}}></div>
            <div className='w-full h-[6px] flex justify-center items-center' style={{height: `${i}px`}}>
                {i === 45 && <span className='text-sm text-white text-center'>
                    This site was built using Next.js, Tailwind and Typescript.
                </span>}
            </div>
        </div>);
    }
    return (<div className='w-full flex-col mt-24'>
        {gradientFooter}
        {/* <div className='w-full bg-white flex items-center justify-center text-blue-300 p-4'>
            This site was built using Next.js, Tailwind and Typescript.
        </div> */}
    </div>)
}