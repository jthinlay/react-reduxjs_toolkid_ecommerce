import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
       @media screen and (max-width: 390px){
        ${props}
    }
    `
}
// export const tablet = (props) => {
//     return css`
//         @media screen and (max-width: 580px){
//             ${props}
//         }
//     `
//  }