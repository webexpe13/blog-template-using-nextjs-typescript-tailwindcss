import { useState } from 'react';
import { combineClasses } from '../../utils/utils';
import { AiFillCaretRight } from 'react-icons/ai';

interface iAccordian {
    title: string,
    children: any,
    keepOpen: boolean
}

const Accordian = ({ title = "Accordian Title", children, keepOpen = false }: iAccordian) => {
    const [open, setOpen] = useState(keepOpen);

    const openAccordian = () => {
        setOpen(!open)
    }

    return (
        <div className="border-b border-slate-300 pb-1 my-3 w-full">
            <h3 className='md:text-xl text-[18px] font-bold cursor-pointer hover:opacity-80 transition-opacity flex justify-between md:items-center items-start' onClick={openAccordian}>
                {title} <AiFillCaretRight className={combineClasses('md:text-[30px] text-[25px] md:pt-0 pt-1 transition-transform text-blue-500 dark:text-white ml-3 shrink-0', open ? '-rotate-90' : 'rotate-90')} />
            </h3>
            <div className={combineClasses('md:text-[18px] text-[16px]  text-slate-700 dark:text-slate-300 font-regular overflow-hidden transition-all w-full ring-blue-200 rounded px-3',
                    open ? 'max-h-[300px] my-3 ring-1 p-2 ' : 'max-h-[0px]')}>
                {children}
            </div>
        </div>
    )
}

export default Accordian;