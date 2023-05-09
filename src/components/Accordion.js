
const Accordion = ({ children, open,title }) => {
  return (
    <>
      <div className="container mx-auto">
        {open ? (
          <details open>
            <summary className="w-full bg-gray-700 text-white">
                {title}</summary>
            <div>
            <span>{children}</span>
            </div>
          </details>
        ) : (
          <details>
            <summary className="w-full bg-gray-700 text-white">{title}</summary>
            <div>
            <span>{children}</span>
            </div>
          </details>
        )}
      </div>
    </>
  );
};

export default Accordion;
