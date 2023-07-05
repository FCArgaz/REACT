import styles from "./EmojiPicker.module.scss";

export default function EmojiButton({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }

  return <button onClick={handleClick} className={styles.emojiButton}>{emoji.Symbol}</button>;
}
