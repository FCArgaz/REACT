import { forwardRef, useState } from "react";
import { Data as EmojiList } from "./Data";
import EmojiSearch from "./EmojiSearch";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(EmojiList);

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
    }else{
        setEmojis(EmojiList);
    }
  }

  function EmojiPickerContainer() {
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
  }
  return (
    <div>
      <button onClick={handleClickOpen}>🌞</button>

      {isOpen ? <div>
        <EmojiSearch onSearch={handleSearch} />
        <div>
          {EmojiList.map((emoji) => (
            <div key={emoji.Symbol}>{emoji.Symbol}</div>
          ))}
        </div>
      </div> : ""}
    </div>
  );
}

export default forwardRef(EmojiPicker);
