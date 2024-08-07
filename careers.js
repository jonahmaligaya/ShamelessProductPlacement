
class MagicSlide extends HTMLElement {
  static template = (() => {
    const templateElement = document.createElement("template")
    templateElement.innerHTML = `
      <style>
        * { margin: 0; padding: 0; }
        :host {
          display: block;
        }
        slot {
          display: inline-block;
          overflow-y: hidden;
        }
      </style>
      <slot></slot>
    `
    return templateElement
  })()

  slot

  constructor() {
    super()
    const shadow = this.attachShadow({mode: "open"})
    shadow.appendChild(MagicSlide.template.content.cloneNode(true))
    this.slot = shadow.querySelector("slot")
  }

  get duration() {
    const attribute = this.getAttribute("duration")
    return (attribute && parseInt(attribute)) ?? 1000
  }

  get show() {
    return !(this.getAttribute("closed") !== null)
  }
  set show(value) {
    this.safelyChangeAttribute(() => {
      setBooleanAttribute(this, "closed", !value)
    })
  }

  get busy() {
    return this.getAttribute("busy") !== null
  }
  set busy(value) {
    this.safelyChangeAttribute(() => {
      setBooleanAttribute(this, "busy", value)
    })
  }

  get height() {
    return this.slot.offsetHeight
  }

  get fullHeight() {
    const {height: styleHeight, display: styleDisplay} = this.slot.style
    this.slot.style = undefined
    const height = this.height
    this.slot.style.height = styleHeight
    this.slot.style.display = styleDisplay
    return height
  }

  set height(value) {
    this.slot.style.height = `${value}px`
    this.slot.style.display = value === 0
      ? "none"
      : "block"
  }

  connectedCallback() {
    const {show} = this
    this.height = show ? this.fullHeight : 0
    this.percent = show ? 100 : 0
  }

  percent = 100
  animationPromise = undefined
  async animate(show) {
    this.show = show
    const {duration, busy} = this
    if (!busy) {
      this.busy = true
      const {fullHeight} = this
      this.animationPromise = new Promise((resolve, reject) => {
        let last = Date.now()
        const recurse = () => {
          const diff = Date.now() - last
          last = Date.now()
          const fraction = diff / duration
          const step = fraction * 100
          const {percent, show} = this
          const newPercent = cap({
            value: show
              ? percent + step
              : percent - step,
            min: 0,
            max: 100
          })
          this.percent = newPercent
          const newHeight = (newPercent / 100) * fullHeight
          this.height = newHeight
          if (show ? (newPercent === 100) : (newPercent === 0)) {
            this.busy = false
            resolve(show)
          }
          else window.requestAnimationFrame(recurse)
        }
        recurse()
      })
    }
    return this.animationPromise
  }

  open = async() => this.animate(true)
  close = async() => this.animate(false)
  toggle = async() => this.animate(!this.show)

  static get observedAttributes() {
    return ["closed"]
  }
  ignore = false
  attributeChangedCallback() {
    if (!this.ignore)
      this.animate(this.show)
  }
  safelyChangeAttribute(changer) {
    this.ignore = true
    changer()
    this.ignore = false
  }
}

function cap({value, min, max}) {
  return value < min
    ? min
    : value > max
      ? max
      : value
}

function setBooleanAttribute(element, attribute, value) {
  if (value)
    element.setAttribute(attribute, "")
  else
    element.removeAttribute(attribute)
}

customElements.define("magic-slide", MagicSlide)

async function magicSlide() {
  const game_designer_extension = document.querySelector("#game_designer_extension")
  document.querySelector("#game_designer").onclick = game_designer_extension.toggle
  const game_programmer_extension = document.querySelector("#game_programmer_extension")
  document.querySelector("#game_programmer").onclick = game_programmer_extension.toggle
  const game_artist_extension = document.querySelector("#game_artist_extension")
  document.querySelector("#game_artist").onclick = game_artist_extension.toggle
  const sound_designer_extension = document.querySelector("#sound_designer_extension")
  document.querySelector("#sound_designer").onclick = sound_designer_extension.toggle
  const web_designer_extension = document.querySelector("#web_designer_extension")
  document.querySelector("#web_designer").onclick = web_designer_extension.toggle
  const game_tester_extension = document.querySelector("#game_tester_extension")
  document.querySelector("#game_tester").onclick = game_tester_extension.toggle
  const finance_extension = document.querySelector("#finance_extension")
  document.querySelector("#finance").onclick = finance_extension.toggle
  const marketer_extension = document.querySelector("#marketer_extension")
  document.querySelector("#marketer").onclick = marketer_extension.toggle
}

magicSlide()