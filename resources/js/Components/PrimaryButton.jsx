export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `w-full flex justify-center items-center rounded-md border border-transparent 
                bg-[rgba(46,69,146,1)] px-4 py-3 text-sm font-semibold text-white transition 
                duration-150 ease-in-out hover:bg-[rgba(35,52,112,1)] focus:bg-[rgba(35,52,112,1)] 
                focus:outline-none focus:ring-2 focus:ring-[rgba(46,69,146,0.5)] focus:ring-offset-2 
                active:bg-[rgba(28,41,89,1)] ${disabled && 'opacity-25'} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}