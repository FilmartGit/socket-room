import clsx from "clsx";

const UIInputs = {
  GroupeInput: ({
    title,
    id,
    name,
    type = "text",
    placeholder,
    required,
    onChange,
    error,
    className,
  }) => {
    return (
      <div className={clsx("form_groupe liter", className)}>
        <label htmlFor={id} className="form_groupe_label">
          {title}
        </label>
        <input
          className={clsx(
            "form_groupe_input",
            error && "form_groupe_input_error",
          )}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange(e)}
        />
      </div>
    );
  },
  Input: ({
    id,
    name,
    type = "text",
    value,
    placeholder,
    required,
    onChange,
    error,
    className
  }) => {
    return (
      <input
        className={clsx(
          "form_groupe_input",
          error && "form_groupe_input_error",
          className
        )}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e)}
        value={value}
      />
    );
  },
};

export default UIInputs;
