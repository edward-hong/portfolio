import styled from 'styled-components'

const Hexagon = styled.a`
  font-size: ${({ size }) => `${size}px`};
  width: 3.75em;
  height: 4.25em;
  transform-origin: center center;
  cursor: pointer;
`
const Slice = styled.span`
  position: absolute;
  top: 0px;
  left: 50%;
  transform-origin: left bottom;
  border-top: 1.125em solid transparent;
  border-right: none;
  border-bottom: 1em solid transparent;
  border-left: 1.875em solid ${({ bgColor }) => bgColor};
  border-radius: 3px 3px 0px 0px;

  &:nth-child(${({ i }) => i}) {
    transform: rotateZ(${({ i }) => i * 60}deg) rotateY(0deg) rotateZ(0deg);
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      ${({ i }) => (7 - i) * 0.08}s;
  }
`

const Hex = ({ children, className, size, bgColor, onClick }) => (
  <Hexagon size={size} className={className} onClick={onClick}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Slice bgColor={bgColor} i={i} key={i} />
    ))}
    {children}
  </Hexagon>
)

export default Hex
