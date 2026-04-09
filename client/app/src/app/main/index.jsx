import UIIcons from "../../ui/icons";
import styles from "./style/main.module.css";
import FormInputs from "./components/form-inputs";
import UITitle from "../../ui/title";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <UIIcons.Logo className={styles.logo} />
      <div className={`${styles.form_container} glass`}>
        <UITitle.Base
          title="Присоедениться к комнате"
          className={styles.heading}
        />
        <FormInputs />
      </div>
    </div>
  );
};

export default Main;
