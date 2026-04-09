import clsx from "clsx";

const UITitle = {
  Base: ({ title, className }) => {
    return <h1 className={clsx(className, "unbounded")}>{title}</h1>;
  },
};

export default UITitle;
