type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textbox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
