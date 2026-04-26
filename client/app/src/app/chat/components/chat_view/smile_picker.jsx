import clsx from "clsx";
import UIIcons from "../../../../ui/icons";
import styles from "../../style/chat.module.css";
import EmojiPicker from "emoji-picker-react";

export default function SmilePicker({
  showEmojiPicker,
  toggleEmojiPicker,
  onEmojiClick,
}) {
  return (
    <div className={styles.emoji}>
      <button className="rounded_smile" onClick={toggleEmojiPicker}>
        <UIIcons.Smile />
      </button>
      {showEmojiPicker && (
        <EmojiPicker
          onEmojiClick={onEmojiClick}
          className={clsx(styles.emojiPicker, "liter anim_show")}
        />
      )}
    </div>
  );
}
