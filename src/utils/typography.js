import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
// import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(kirkhamTheme)
// const typography = new Typography(fairyGateTheme)

export default typography
export const rhythm = typography.rhythm
// export const { scale, rhythm, options } = typography