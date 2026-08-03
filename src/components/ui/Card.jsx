// Card.jsx
const Card = ({ children, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = "" }) => {
  return (
    <div className={` ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;