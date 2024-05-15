export default function TabButton({isSelected, children,...props}){
    let classes = "button"
    if(isSelected){
        classes += " active";
    }
    return(
        <li><button className={classes} {...props}>{children}</button></li>
    );
}