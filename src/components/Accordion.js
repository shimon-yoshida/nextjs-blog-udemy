import styles from "../styles/Yashima.module.css";

const Accordion = ({ children, open,title }) => {
  return (
    <>
      <div className="container mx-auto">
        {open ? (
          <details open>
            <summary className="w-full bg-blue-700 text-white">
                {title}</summary>
            <div className={`${styles.tab_content}`}>
            <span>{children}</span>
            </div>
          </details>
        ) : (
          <details>
            <summary className="w-full bg-blue-700 text-white">{title}</summary>
            <div className={`${styles.tab_content}`}>
            <span>{children}</span>
            </div>
          </details>
        )}
      </div>
    </>
  );
};

export default Accordion;
