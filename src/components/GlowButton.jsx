import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

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

// Define prop types after the component definition
GlowButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default GlowButton;
// The GlowButton component is a simple button component that adds a glow effect when hovered.
//  It accepts children and className props and applies the glow effect when hovered. 
// The button is styled using Tailwind CSS classes and the cn utility function.
