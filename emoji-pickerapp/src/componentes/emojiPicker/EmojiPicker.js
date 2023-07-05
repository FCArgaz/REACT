import { forwardRef, useRef, useState, useEffect } from "react";
import { Data as EmojiList } from "./Data";
import EmojiSearch from "./EmojiSearch";
import EmojiButton from "./EmojiButton";

import styles from "./EmojiPicker.module.scss";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emoji, setEmojis] = useState(EmojiList);

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis(EmojiList);
      }
    });
  }, []);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    const q = e.target.value;

    if (!!q) {
      const search = EmojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLocaleLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(EmojiList);
    }
  }

  /*  function EmojiPickerContainer() {
    return (
      <div>
        <EmojiSearch onSearch={handleSearch} />
        <div>
          {EmojiList.map((emoji) => (
            <div key={emoji.Symbol}>{emoji.Symbol}</div>
          ))}
        </div>
      </div>
    );
  }*/

  function handleOnClickEmoji(emoji) {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji.Symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.Symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.Symbol.length;
    inputRef.current.focus();
  }

  return (
    <div ref={containerRef} className={styles.inputContainer}>
      <button onClick={handleClickOpen} className={styles.emojiPickerButton}>🌞</button>

      {isOpen ? (
        <div className={styles.emojiPickerContainer}>
          <EmojiSearch onSearch={handleSearch} />
          <div className={styles.emojiList}>
            {emoji.map((emoji) => (
              <EmojiButton
                key={emoji.Symbol}
                emoji={emoji}
                onClick={handleOnClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
