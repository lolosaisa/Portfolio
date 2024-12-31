import { cn } from "@/lib/utils";


GlowButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
  

const GlowButton = ({ children, className, ...props }) => {
    return (
        <button
            className={cn(
                "px-6 py-3 text-accent border border-accent rounded hover:bg-accent/10",
                "transition-all duration-300 relative group",
                "before:absolute before:inset-0 before:rounded before:bg-accent/0 before:transition-all",
                "hover:before:bg-accent/10 before:-z-10",
                "text-sm tracking-wider",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default GlowButton;

