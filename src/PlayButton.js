class PlayButton extends Button {
  constructor() {
    super();
  }

  Init(view, id, x, y, r, fill) {
    let g = CreateSVGElem("g", id);
    g.setAttribute("width", r*2);
    g.setAttribute("height", r*2);
    let path  = CreateLeftTriangle(null, r, r, r, "none", fill);
    g.appendChild(path);
    g.addEventListener("click", this._onClick);
    g.addEventListener("mousedown", this._onDefaultEvent);
    g.addEventListener("mouseup", this._onDefaultEvent);
    g.addEventListener("mousemove", this._onDefaultEvent);
    g.addEventListener("mouseover", this._onDefaultEvent);
    g.setAttribute("transform", `translate(${x}, ${y})`);
    g.setAttribute("cursor", "pointer");
    view.appendChild(g);
    super.svg = g;
    super.fill = fill;
  }

  _onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    super.OnClickEvent(e);
    return false;
   }

  _onDefaultEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}
